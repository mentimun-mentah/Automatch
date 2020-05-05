import json
from basetest import BaseTest
from services.models.UserModel import Users

class UserTest(BaseTest):
    ACCESS_TOKEN = None
    REFRESH_TOKEN = None

    def test_00_validation_user_register(self):
        with self.app() as client:
            # check username cannot blank
            res = client.post('/register',json={"username":""})
            self.assertIn('username',json.loads(res.data).keys())
            # check email cannot blank
            res = client.post('/register',json={"email":""})
            self.assertIn('email',json.loads(res.data).keys())
            # check password cannot blank
            res = client.post('/register',json={"password":""})
            self.assertIn('password',json.loads(res.data).keys())
            # check confirm_password cannot blank
            res = client.post('/register',json={"confirm_password":""})
            self.assertIn('confirm_password',json.loads(res.data).keys())

            # check email format
            res = client.post('/register',json={"email":"asd"})
            self.assertIn('email',json.loads(res.data).keys())
            # check password min length 6
            res = client.post('/register',json={"password":"asd"})
            self.assertIn('password',json.loads(res.data).keys())
            # check confirm password min length 6
            res = client.post('/register',json={"confirm_password":"asd"})
            self.assertIn('confirm_password',json.loads(res.data).keys())
            # check password and confirm password is same
            res = client.post('/register',json={"username":"asd",
                "email":"asd@gmail.com",
                "password":"asdasd",
                "confirm_password":"123456"})
            self.assertIn('password',json.loads(res.data).keys())

    def test_01_create_user(self):
        with self.app() as client:
            res = client.post('/register',json={"username":"asd",
                "email":"asd@gmail.com",
                "password":"asdasd",
                "confirm_password":"asdasd"})
            self.assertEqual(res.status_code,201)

    def test_02_check_duplicate_user(self):
        with self.app() as client:
            res = client.post('/register',json={"username":"asd",
                "email":"asd@gmail.com",
                "password":"asdasd",
                "confirm_password":"asdasd"})

            self.assertEqual(res.status_code,400)
            self.assertIn('email',json.loads(res.data).keys())
            self.assertIn('username',json.loads(res.data).keys())

    def test_03_check_invalid_token_email(self):
        with self.app() as client:
            res = client.get('/user-confirm/tokenasal')
            self.assertEqual(res.status_code,404)

    def test_04_confirm_email(self):
        user = Users.query.filter_by(username="asd").first()
        with self.app() as client:
            res = client.get('/user-confirm/{}'.format(user.confirmation.id))
            self.assertIn('has been activated',json.loads(res.data)['message'])
            # check already activated
            res = client.get('/user-confirm/{}'.format(user.confirmation.id))
            self.assertEqual('Your account already activated.',json.loads(res.data)['message'])
        user.confirmation.activated = False
        user.confirmation.save_to_db()

    def test_05_token_is_expired(self):
        user = Users.query.filter_by(username="asd").first()
        user.confirmation.expired_at = user.confirmation.expired_at - 3600  # reduce 1 hour
        user.confirmation.save_to_db()
        with self.app() as client:
            res = client.get('/user-confirm/{}'.format(user.confirmation.id))
            self.assertEqual(res.status_code,400)

    def test_06_resend_email(self):
        user = Users.query.filter_by(username="asd").first()
        user.confirmation.activated = True
        user.confirmation.save_to_db()
        with self.app() as client:
            res = client.post('/resend-email',json={"email":"asd@gmail.com"})
            self.assertEqual(res.status_code,200)
            self.assertEqual('Your account already activated.',json.loads(res.data)['message'])

        user.confirmation.activated = False
        user.confirmation.save_to_db()

        with self.app() as client:
            res = client.post('/resend-email',json={"email":"asd@gmail.com"})
            self.assertEqual(res.status_code,200)
            self.assertEqual('Email confirmation has send',json.loads(res.data)['message'])
            res = client.post('/resend-email',json={"email":"asd@gmail.com"})
            self.assertEqual(res.status_code,400)
            self.assertEqual('You can try 5 minute later',json.loads(res.data)['error'])

    def test_07_check_login(self):
        with self.app() as client:
            # check email not found
            res = client.post('/login',json={"email":"ngawak@gmail.com","password":"asdasd"})
            self.assertEqual('Invalid credential',json.loads(res.data)['message'])
            # check password wrong
            res = client.post('/login',json={"email":"asd@gmail.com","password":"123456"})
            self.assertEqual('Invalid credential',json.loads(res.data)['message'])
            # check email not activated yet
            res = client.post('/login',json={"email":"asd@gmail.com","password":"asdasd"})
            self.assertEqual('Check your email to activated user.',json.loads(res.data)['message'])

        user = Users.query.filter_by(username="asd").first()
        user.confirmation.activated = True
        user.confirmation.save_to_db()

        with self.app() as client:
            # get access token and refresh token
            res = client.post('/login',json={"email":"asd@gmail.com","password":"asdasd"})
            self.assertIn('access_token',json.loads(res.data).keys())
            self.assertIn('refresh_token',json.loads(res.data).keys())
            self.__class__.ACCESS_TOKEN = json.loads(res.data)['access_token']
            self.__class__.REFRESH_TOKEN = json.loads(res.data)['refresh_token']

    def test_08_check_refresh_token(self):
        with self.app() as client:
            # check missing header authorization
            res = client.post('/refresh')
            self.assertEqual('Missing Authorization Header',json.loads(res.data)['msg'])
            # check only refresh token
            res = client.post('/refresh',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual('Only refresh tokens are allowed',json.loads(res.data)['msg'])
            # get new access token
            res = client.post('/refresh',headers={"Authorization":f"Bearer {self.REFRESH_TOKEN}"})
            self.assertIn('access_token',json.loads(res.data).keys())

    def test_09_change_password(self):
        with self.app() as client:
            # check new password and confirm password not match
            res = client.put('/update-password',
                json={"password":"asdasd","new_password":"asd123","confirm_password":"123456"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertIn('Your new password and confirmation password do not match.',json.loads(res.data)['new_password'])
            # check password incorrect
            res = client.put('/update-password',
                json={"password":"ngasalngasal","new_password":"123456","confirm_password":"123456"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertIn('Your password incorrect.',json.loads(res.data)['password'])
            # password updated
            res = client.put('/update-password',
                json={"password":"asdasd","new_password":"123456","confirm_password":"123456"},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertEqual('Password has been updated.',json.loads(res.data)['message'])

    def test_10_update_profile(self):
        with self.app() as client:
            # check input blank and valid url company_site
            res = client.put('/update-profile',json={"username":"",
                "company_name":"",
                "company_site":"test",
                "position":""},
                headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertIn('username',json.loads(res.data).keys())
            self.assertIn('company_name',json.loads(res.data).keys())
            self.assertIn('company_site',json.loads(res.data).keys())
            self.assertIn('position',json.loads(res.data).keys())

    def test_11_get_user(self):
        with self.app() as client:
            res = client.get('/user',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)

    def test_12_get_dashboard_user(self):
        with self.app() as client:
            res = client.get('/dashboard-user',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertIn("total_applicant",json.loads(res.data).keys())
            self.assertIn("published_job",json.loads(res.data).keys())
            self.assertIn("qualify_applicant",json.loads(res.data).keys())
            self.assertIn("disqualify_applicant",json.loads(res.data).keys())
            self.assertIn("job_summary",json.loads(res.data).keys())
            self.assertIn("length_of_work",json.loads(res.data).keys())

    def test_13_pagination_and_search_all_job_dashboard(self):
        with self.app() as client:
            res = client.get('/dashboard-user/jobs?page=1&q=a',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual(res.status_code,200)
            self.assertIn("data",json.loads(res.data).keys())
            self.assertIn("next_num",json.loads(res.data).keys())
            self.assertIn("prev_num",json.loads(res.data).keys())
            self.assertIn("page",json.loads(res.data).keys())
            self.assertIn("iter_pages",json.loads(res.data).keys())

    def test_14_logout_user(self):
        with self.app() as client:
            res = client.delete('/logout',headers={"Authorization":f"Bearer {self.ACCESS_TOKEN}"})
            self.assertEqual('Successfully logged out.',json.loads(res.data)['message'])

    def test_99_delete_user_from_db(self):
        user = Users.query.filter_by(username="asd").first()
        user.delete_from_db()
