from services.serve import app, api
from services.resources import Users
from services.resources import Jobs
from services.resources import Applicants

api.add_resource(Users.GetUser,'/user')
api.add_resource(Users.RegisterUser,'/register')
api.add_resource(Users.LoginUser,'/login')
api.add_resource(Users.LogoutUser,'/logout')
api.add_resource(Users.RefreshToken,'/refresh')
api.add_resource(Users.ConfirmUser,'/user-confirm/<token>',endpoint='user.confirm')
api.add_resource(Users.ResendEmail,'/resend-email')
api.add_resource(Users.UpdatePassword,'/update-password')
api.add_resource(Users.ChangeAvatar,'/change-avatar')
api.add_resource(Users.UpdateProfile,'/update-profile')
api.add_resource(Users.DashboardUser,'/dashboard-user')
api.add_resource(Users.DashboardJobs,'/dashboard-user/jobs')

api.add_resource(Jobs.GetJob,'/job/<int:id>')
api.add_resource(Jobs.ScrapeJob,'/scrape-job')
api.add_resource(Jobs.DeleteJob,'/delete-job/<int:id>')
api.add_resource(Jobs.GetConceptKeyword,'/concept-keyword-job/<int:id>')
api.add_resource(Jobs.UpdateScore,'/update-score/<int:job_id>')

api.add_resource(Applicants.GetScoreApplicant,'/get-score/applicant/<int:job_id>')
api.add_resource(Applicants.SearchApplicant,'/search-applicant/')
api.add_resource(Applicants.GetApplicant,'/applicant/<int:id>')
api.add_resource(Applicants.QualifyApplicant,'/applicant/qualify/<int:id>')
api.add_resource(Applicants.ScrapeApplicants,'/scrape-applicants/<int:job_id>')

if __name__ == '__main__':
    app.run(host="192.168.18.52",port=5000)
