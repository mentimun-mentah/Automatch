import json
from basetest import BaseTest
from services.models.UserModel import Users

class JobTest(BaseTest):
    ACCESS_TOKEN = None
    REFRESH_TOKEN = None

    def login_user(self,email: str) -> "JobTest":
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

    def test_01_check_valid_url_scraping(self):
        with self.app() as client:
            # url is blank
            res = client.post('/scrape-job',json={"url_job":""},headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertListEqual(['Not a valid URL.'],json.loads(res.data)['url_job'])
            # url not registered
            res = client.post('/scrape-job',
                json={"url_job":"https://www.google.com/"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('Upss job portal not registerd yet.',json.loads(res.data)['message'])
            # invalid url in urbanhire
            res = client.post('/scrape-job',
                json={"url_job":"https://www.urbanhire.com/jobs"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('Upps invalid url job portal.',json.loads(res.data)['message'])
            # invalid url in linkedin
            res = client.post('/scrape-job',
                json={"url_job":"https://www.linkedin.com/jobs/"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('Upps invalid url job portal.',json.loads(res.data)['message'])

    def test_02_scraping_linkedin(self):
        for _ in range(2):
            with self.app() as client:
                res = client.post('/scrape-job',
                    json={"url_job":"https://www.linkedin.com/jobs/view/1806664168/?alternateChannel=search"},
                    headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
                self.assertEqual(res.status_code,201)
                self.assertEqual('Job successfully added.',json.loads(res.data)['message'])

        # check limit job scraping for account free
        with self.app() as client:
            res = client.post('/scrape-job',
                json={"url_job":"https://www.linkedin.com/jobs/view/1806664168/?alternateChannel=search"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("Upss you can't scrape job greater than 2, please upgrade your account.",json.loads(res.data)['message'])

    def test_03_delete_job(self):
        user = Users.query.filter_by(username="asd").first()
        with self.app() as client:
            # check job not exists
            res = client.delete('/delete-job/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            # delete job
            res = client.delete('/delete-job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual('Job successfully delete.',json.loads(res.data)['message'])
            self.assertEqual(res.status_code,200)

    def test_04_check_other_user_delete(self):
        self.login_user("ass@gmail.com")

        user = Users.query.filter_by(username="asd").first()
        with self.app() as client:
            # check job another user cannot delete
            res = client.delete('/delete-job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual("You can't delete this job!",json.loads(res.data)['message'])
            self.assertEqual(res.status_code,400)

    def test_05_get_concept_keyword(self):
        user = Users.query.filter_by(username="asd").first()

        with self.app() as client:
            # check job id not found
            res = client.get('/concept-keyword-job/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            # check get concept keyword with another user
            res = client.get('/concept-keyword-job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this job!",json.loads(res.data)['message'])

        # get valid user for job
        self.login_user("asd@gmail.com")

        # get valid job
        with self.app() as client:
            res = client.get('/concept-keyword-job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Keywords and Concepts success added.",json.loads(res.data)['message'])

        # get concept and keywords but already exists
        with self.app() as client:
            res = client.get('/concept-keyword-job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("Job already have concepts and keywords.",json.loads(res.data)['message'])

    def test_06_get_job(self):
        user = Users.query.filter_by(username="asd").first()

        with self.app() as client:
            # job not found
            res = client.get('/job/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            # get valid job
            res = client.get('/job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)

        self.login_user("ass@gmail.com")

        # get job with another user
        with self.app() as client:
            res = client.get('/job/{}'.format(user.jobs[0].id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this job!",json.loads(res.data)['message'])

    def test_07_update_overall_score(self):
        user = Users.query.filter_by(username="asd").first()
        job_id = user.jobs[0].id

        with self.app() as client:
            # update score column not found
            res = client.put('/update-score/1000',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,404)
            self.assertEqual("Upps score not found",json.loads(res.data)['message'])
            # not valid user access overall score
            res = client.put('/update-score/{}'.format(job_id),headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("You can't access this score!",json.loads(res.data)['message'])

        self.login_user("asd@gmail.com")

        with self.app() as client:
            # check all data required
            res = client.put('/update-score/{}'.format(job_id),json={},headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            error = json.loads(res.data).keys()
            self.assertIn('score_experience',error)
            self.assertIn('score_current_position',error)
            self.assertIn('score_skill',error)
            self.assertIn('score_honor',error)
            self.assertIn('score_license',error)
            self.assertIn('score_education',error)
            self.assertIn('priority_univ',error)
            # check range int min 1 and max 100 and priority_university required
            res = client.put('/update-score/{}'.format(job_id),
                json={"score_experience":0,
                    "score_current_position":0,
                    "score_skill":0,
                    "score_honor":0,
                    "score_license":0,
                    "score_education":0},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertListEqual(['Missing data for required field.'],json.loads(res.data)['priority_univ'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_experience'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_current_position'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_skill'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_honor'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_license'])
            self.assertListEqual(['Must be greater than or equal to 1 and less than or equal to 100.'],
                    json.loads(res.data)['score_education'])
            # check all data after calculation must be 100%
            res = client.put('/update-score/{}'.format(job_id),
                json={"score_experience":3,
                    "score_current_position":2,
                    "score_skill":1,
                    "score_honor":2,
                    "score_license":4,
                    "score_education":1,
                    "priority_univ":""},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,400)
            self.assertEqual("The calculation results must all be 100%",json.loads(res.data)['message'])
            # success update
            res = client.put('/update-score/{}'.format(job_id),
                json={"score_experience":3,
                    "score_current_position":2,
                    "score_skill":1,
                    "score_honor":2,
                    "score_license":4,
                    "score_education":88,
                    "priority_univ":""},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual("Overall score has been update.",json.loads(res.data)['message'])

    def test_99_delete_user_from_db(self):
        user = Users.query.filter_by(username="asd").first()
        user.delete_from_db()
        user = Users.query.filter_by(username="ass").first()
        user.delete_from_db()
