import re, os
from typing import List, Dict, Union
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

_LINKEDIN_EMAIL = os.getenv("LINKEDIN_EMAIl")
_LINKEDIN_PASSWORD = os.getenv("LINKEDIN_PASSWORD")

class ProfileLinkedin:
    valid_scrape_url = True

    def __init__(self,applicants: List):
        self.applicants = applicants

    def browser_close(self) -> "ProfileLinkedin":
        self.driver.close()

    @property
    def valid_url(self) -> bool:
        check = True
        for url in self.applicants:
            if 'www.linkedin.com' not in url:
                check = False
            if 'https://www.linkedin.com/in/' not in url:
                self.valid_scrape_url = False
        return check

    def get_driver(self) -> "ProfileLinkedin":
        self.driver = webdriver.Remote(command_executor='http://hub:4444/wd/hub',
                desired_capabilities=DesiredCapabilities.CHROME)

    def get_content(self) -> List[Dict[str,Union[str,Dict,List]]]:
        # setup driver
        self.get_driver()
        # process scraping
        self.login()
        result = [self.scraping_profile(x) for x in self.applicants]
        self.browser_close()
        return result

    def login(self) -> "ProfileLinkedin":
        self.driver.get('https://www.linkedin.com/login')
        self.driver.find_element(By.ID,"username").send_keys(_LINKEDIN_EMAIL)
        self.driver.find_element(By.ID,"password").send_keys(_LINKEDIN_PASSWORD)
        self.driver.find_element(By.TAG_NAME,"button").click()

    def scraping_profile(self,url: str) -> Dict[str,Union[str,Dict,List]]:
        self.driver.get(url)
        # get html image section
        image_raw = self.driver.find_element(By.XPATH,"//*[@class='pv-top-card--photo text-align-left']").get_attribute('innerHTML')
        soup = BeautifulSoup(image_raw, "html.parser")
        image = soup.find("img")['src']
        # get html top linkedin
        profile_top = self.driver.find_element(By.XPATH,"//*[@class='flex-1 mr5']").get_attribute('innerHTML')
        soup = BeautifulSoup(profile_top, "html.parser")
        # extract data using bs4
        name = soup.find("li").text.strip()
        current_job = soup.find("h2").text.strip()
        address = soup.find_all("ul")[1].li.text.strip()

        scroll = True
        incr = 100
        # check experience available
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[@id='experience-section']")))
                scroll = False
            except Exception:
                if incr > 200: scroll = False
                incr += 100

        # get html experience
        try:
            experience_raw = self.driver.find_element(By.XPATH,"//*[@id='experience-section']").get_attribute('innerHTML')
            soup = BeautifulSoup(experience_raw, "html.parser")
            # get jobs
            experiences = dict()

            # get experiences without timeline
            try:
                for index,element in enumerate(soup.find_all("li")):
                    job = element.h3.text
                    company_name = element.find("p",class_="pv-entity__secondary-title t-14 t-black t-normal").contents[0].strip()
                    raw_date_employed = element.find("h4",class_="pv-entity__date-range t-14 t-black--light t-normal")
                    date_employed = raw_date_employed.find_all("span")[-1].text
                    try:
                        raw_detail = element.find("div",class_="pv-entity__extra-details t-14 t-black--light ember-view")
                        raw_detail = str(raw_detail.p).replace("\n","").replace("  ","")
                        try:
                            detail = re.findall(r'">(.*)<span class="inline-show-more-text__link-container-collapsed">',raw_detail)[0]
                        except Exception:
                            detail = re.findall(r'">(.*)<!-',raw_detail)[0]
                    except Exception:
                        detail = ""

                    experiences[index] = {
                        "job": job,
                        "company_name": company_name,
                        "date_employed": date_employed,
                        "detail": detail
                    }
            except Exception:
                # get experiences with timeline
                for index,element in enumerate(soup.find_all("li")):
                    raw_company_name = element.find("h3",class_="t-16 t-black t-bold")
                    raw_job = element.find("h3",class_="t-14 t-black t-bold")
                    raw_date_employed = element.find("h4",class_="pv-entity__date-range t-14 t-black--light t-normal")
                    try:
                        raw_detail = element.find("div",class_="pv-entity__extra-details t-14 t-black--light ember-view")
                        raw_detail = str(raw_detail.p).replace("\n","").replace("  ","")
                        try:
                            detail = re.findall(r'">(.*)<span class="inline-show-more-text__link-container-collapsed">',raw_detail)[0]
                        except Exception:
                            detail = re.findall(r'">(.*)<!-',raw_detail)[0]
                    except Exception:
                        detail = ""

                    date_employed = raw_date_employed.find_all("span")[-1].text
                    try:
                        # get company name with timeline
                        company_name = raw_company_name.find_all("span")[-1].text
                    except Exception:
                        try:
                            job = raw_job.find_all("span")[-1].text
                        except Exception:
                            job = raw_company_name.text

                        # get company name without timeline
                        try:
                            company_name = element.find("p",class_="pv-entity__secondary-title t-14 t-black t-normal").text.strip()
                        except Exception:
                            pass

                        experiences[index] = {
                            "job": job,
                            "company_name": company_name,
                            "date_employed": date_employed,
                            "detail": detail
                        }

        except Exception:
            experiences = dict()

        # check education available
        scroll = True
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[@id='education-section']")))
                scroll = False
            except Exception:
                if incr > 300: scroll = False
                incr += 100

        # get html education
        try:
            education_raw = self.driver.find_element(By.XPATH,"//*[@id='education-section']").get_attribute('innerHTML')
            soup = BeautifulSoup(education_raw, "html.parser")
            # get educations
            educations = dict()

            for index,element in enumerate(soup.find_all("li")):
                school_name = element.h3.text
                try:
                    raw_degree = element.find("p",class_="pv-entity__secondary-title pv-entity__degree-name t-14 t-black t-normal")
                    degree = raw_degree.find_all("span")[-1].text
                except Exception:
                    degree = ""

                try:
                    raw_field_study = element.find("p",class_="pv-entity__secondary-title pv-entity__fos t-14 t-black t-normal")
                    field_study = raw_field_study.find_all("span")[-1].text
                except Exception:
                    field_study = ""

                raw_date = element.find("p",class_="pv-entity__dates t-14 t-black--light t-normal")
                date = raw_date.find_all("span")[-1].text.strip()

                if degree:
                    study = f"{degree}, {field_study}"
                else:
                    study = field_study

                educations[index] = {
                    'school_name': school_name,
                    'date': date,
                    'study': study
                }

        except Exception:
            educations = dict()

        # check licenses available
        scroll = True
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[@id='certifications-section']")))
                scroll = False
            except Exception:
                if incr > 400: scroll = False
                incr += 100

        # get html licenses
        try:
            license_raw = self.driver.find_element(By.XPATH,"//*[@id='certifications-section']").get_attribute('innerHTML')
            soup = BeautifulSoup(license_raw, "html.parser")
            # get licenses
            licenses = [element.h3.text for index,element in enumerate(soup.find_all("li"))]

        except Exception:
            licenses = []

        # check skill available
        scroll = True
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[contains(@class,'pv-profile-section pv-skill-categories-section artdeco-container-card')]")))
                scroll = False
            except Exception:
                if incr > 500: scroll = False
                incr += 100

        # check button expand
        try:
            WebDriverWait(self.driver,1).until(EC.element_to_be_clickable((By.XPATH,"//*[contains(@class,'pv-profile-section__card-action-bar pv-skills-section__additional-skills')]")))
            # click button expand
            expand_button = self.driver.find_element(By.XPATH,"//*[@class='pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid']")
            self.driver.execute_script("arguments[0].click();", expand_button)
        except Exception:
            pass

        # get html skills
        try:
            skill_raw = self.driver.find_element(By.XPATH,"//*[contains(@class,'pv-profile-section pv-skill-categories-section artdeco-container-card')]").get_attribute('innerHTML')
            soup = BeautifulSoup(skill_raw,"html.parser")
            # get skills
            skills = [element.text.strip() for element in soup.find_all("span",class_="pv-skill-category-entity__name-text t-16 t-black t-bold")]
        except Exception:
            skills = []

        # check honor available
        scroll = True
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[@class='accordion-panel pv-profile-section pv-accomplishments-block honors ember-view']")))
                scroll = False
            except Exception:
                if incr > 600: scroll = False
                incr += 100

        # get html honors
        try:
            honor_raw = self.driver.find_element(By.XPATH,"//*[@class='accordion-panel pv-profile-section pv-accomplishments-block honors ember-view']").get_attribute('innerHTML')
            soup = BeautifulSoup(honor_raw,"html.parser")
            # get honors
            honors = [element.text for element in soup.find_all("li",class_="pv-accomplishments-block__summary-list-item")]
        except Exception:
            honors = []

        # check language available
        scroll = True
        while scroll:
            try:
                self.driver.execute_script(f"window.scrollTo(0, window.scrollY + {incr})")
                WebDriverWait(self.driver,1).until(EC.presence_of_element_located((By.XPATH,"//*[@class='accordion-panel pv-profile-section pv-accomplishments-block languages ember-view']")))
                scroll = False
            except Exception:
                if incr > 700: scroll = False
                incr += 100

        # get html languages
        try:
            language_raw = self.driver.find_element(By.XPATH,"//*[@class='accordion-panel pv-profile-section pv-accomplishments-block languages ember-view']").get_attribute('innerHTML')
            soup = BeautifulSoup(language_raw,"html.parser")
            # get languages
            languages = [element.text for element in soup.find_all("li",class_="pv-accomplishments-block__summary-list-item")]
        except Exception:
            languages = []

        result = dict(
            url = url,
            image = image,
            name = name,
            current_job = current_job,
            address = address,
            languages = languages,
            experiences = experiences,
            educations = educations,
            licenses = licenses,
            skills = skills,
            honors = honors
        )

        return result
