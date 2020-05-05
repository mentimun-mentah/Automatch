import json
from basetest import BaseTest
from services.models.UserModel import Users

class ApplicantTest(BaseTest):
    ACCESS_TOKEN = None
    REFRESH_TOKEN = None

    def login_user(self,email: str) -> "ApplicantTest":
        with self.app() as client:
            # get access token and refresh token
            res = client.post('/login',json={"email": email,"password":"asdasd"})
            self.assertIn('access_token',json.loads(res.data).keys())
            self.assertIn('refresh_token',json.loads(res.data).keys())
            self.__class__.ACCESS_TOKEN = json.loads(res.data)['access_token']
            self.__class__.REFRESH_TOKEN = json.loads(res.data)['refresh_token']

    def test_00_create_user_and_login(self):
        with self.app() as client:
            res = client.post('/register',json={"username":"asd",
                "email":"asd@gmail.com",
                "password":"asdasd",
                "confirm_password":"asdasd"})
            self.assertEqual(res.status_code,201)

            res = client.post('/register',json={"username":"ass",
                "email":"ass@gmail.com",
                "password":"asdasd",
                "confirm_password":"asdasd"})
            self.assertEqual(res.status_code,201)

        user = Users.query.filter_by(username="asd").first()
        user.confirmation.activated = True
        user.confirmation.save_to_db()

        user = Users.query.filter_by(username="ass").first()
        user.confirmation.activated = True
        user.confirmation.save_to_db()

        self.login_user("asd@gmail.com")

    def test_01_add_job(self):
        with self.app() as client:
            res = client.post('/scrape-job',
                json={"url_job":"https://www.linkedin.com/jobs/view/1806664168/?alternateChannel=search"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,201)
            self.assertEqual('Job successfully added.',json.loads(res.data)['message'])

    def test_02_check_valid_job_id(self):
        with self.app() as client:
            res = client.post('/scrape-applicants/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            self.assertEqual("Upps job not found",json.loads(res.data)['message'])

    def test_03_check_valid_url_scraping(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id
        with self.app() as client:
            # check url_applicants empty
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":""},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertListEqual(["Not a valid list."],json.loads(res.data)['url_applicants'])
            # check empty list
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":[]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertListEqual(["Url applicants cannot blank!"],json.loads(res.data)['url_applicants'])
            # check url_applicants in list url blank
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":[""]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertDictEqual({'0': ['Not a valid URL.']},json.loads(res.data)['url_applicants'])
            # check if in list any wrong url
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":["http://google.com/"]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('Upss only profile LinkedIn you can provide.',json.loads(res.data)['message'])
            # check if in list any wrong url linkedin profile
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":["https://www.linkedin.com/in/nyoman-pradipta-dewantara-6a1b70179/","https://www.linkedin.com/feed/"]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('Upps invalid url profile LinkedIn.',json.loads(res.data)['message'])

    def test_04_validation_get_score_applicant(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id

        self.login_user("ass@gmail.com")

        # validation
        with self.app() as client:
            # job not found
            res = client.get('/get-score/applicant/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            self.assertEqual("Upps job not found!",json.loads(res.data)['message'])
            # job can't access with another user
            res = client.get('/get-score/applicant/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this job!",json.loads(res.data)['message'])

        self.login_user("asd@gmail.com")

        with self.app() as client:
            # job doesn't have keywords and concepts
            res = client.get('/get-score/applicant/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("Job doesn't have keywords and concepts!",json.loads(res.data)['message'])

        # get concept and keyword for job
        with self.app() as client:
            res = client.get('/concept-keyword-job/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Keywords and Concepts success added.",json.loads(res.data)['message'])

        # job does not have an applicant
        with self.app() as client:
            res = client.get('/get-score/applicant/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("Upss this job does not have an applicant",json.loads(res.data)['message'])

    def test_05_scraping_profile_linkedin(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id

        with self.app() as client:
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":["https://www.linkedin.com/in/ravidhr/"]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,201)
            self.assertEqual("Applicants successfully added.",json.loads(res.data)['message'])

    def test_06_check_limit_user_free(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id
        with self.app() as client:
            res = client.post('/scrape-applicants/{}'.format(job_id),
                json={"url_applicants":["https://www.linkedin.com/in/ravidhr/",
                    "https://www.linkedin.com/in/ravidhr/",
                    "https://www.linkedin.com/in/ravidhr/",
                    "https://www.linkedin.com/in/ravidhr/",
                    "https://www.linkedin.com/in/ravidhr/"]},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("Upss you can't scrape applicant greater than 5, please upgrade your account.",json.loads(res.data)['message'])

    def test_07_get_score_applicant(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id

        # get score for applicant
        with self.app() as client:
            res = client.get('/get-score/applicant/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("All applicant has been scored",json.loads(res.data)['message'])

    def test_08_scraping_profile_invalid_user_access(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id

        self.login_user("ass@gmail.com")

        # check another user access
        with self.app() as client:
            res = client.post('/scrape-applicants/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this job!",json.loads(res.data)['message'])

    def test_09_get_applicant(self):
        user = Users.query.filter_by(username="asd").first()
        applicant_id = user.jobs[0].applicants[0].id
        with self.app() as client:
            # applicant not found
            res = client.get('/applicant/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code, 404)
            self.assertEqual("Upps applicant not found",json.loads(res.data)['message'])

        with self.app() as client:
            # not valid user access applicant
            res = client.get('/applicant/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this applicant!",json.loads(res.data)['message'])

        self.login_user("asd@gmail.com")

        # valid user access applicant
        with self.app() as client:
            res = client.get('/applicant/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)

    def test_10_qualify_applicant(self):
        user = Users.query.filter_by(username="asd").first()
        applicant_id = user.jobs[0].applicants[0].id

        with self.app() as client:
            # applicant not found
            res = client.put('/applicant/qualify/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            self.assertEqual("Upps applicant not found",json.loads(res.data)['message'])

        with self.app() as client:
            # success update qualify
            res = client.put('/applicant/qualify/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Applicant updated to qualify",json.loads(res.data)['message'])

        with self.app() as client:
            # success update to not qualify
            res = client.put('/applicant/qualify/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Applicant updated to not qualify",json.loads(res.data)['message'])

        self.login_user("ass@gmail.com")

        with self.app() as client:
            # not valid user access applicant
            res = client.put('/applicant/qualify/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this applicant!",json.loads(res.data)['message'])

    def test_11_validation_search_applicant_by_name(self):
        # validation input from args
        with self.app() as client:
            res = client.get('/search-applicant/?s=&job_id=',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertListEqual(["Not a valid integer."],json.loads(res.data)['job_id'])
            self.assertListEqual(["Missing data for required field."],json.loads(res.data)['s'])
        # check job id is integer
        with self.app() as client:
            res = client.get('/search-applicant/?s=a&job_id=a',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertListEqual(["Not a valid integer."],json.loads(res.data)['job_id'])

    def test_12_delete_applicant(self):
        user = Users.query.filter_by(username="asd").first()
        applicant_id = user.jobs[0].applicants[0].id

        with self.app() as client:
            # applicant not found
            res = client.delete('/applicant/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            self.assertEqual("Upps applicant not found",json.loads(res.data)['message'])
            # not valid user access applicant
            res = client.delete('/applicant/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this applicant!",json.loads(res.data)['message'])

        self.login_user("asd@gmail.com")

        with self.app() as client:
            # success delete applicant
            res = client.delete('/applicant/{}'.format(applicant_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Applicant success deleted.",json.loads(res.data)['message'])

    def test_99_delete_user_from_db(self):
        user = Users.query.filter_by(username="asd").first()
        user.delete_from_db()
        user = Users.query.filter_by(username="ass").first()
        user.delete_from_db()
