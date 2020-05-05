import requests
from typing import Dict
from bs4 import BeautifulSoup
from urllib.parse import urlsplit

class ScrapingJobs:
    def __init__(self,url: str):
        self.url = url
        self.base_url = "{0.netloc}".format(urlsplit(url))

    @property
    def valid_url(self) -> bool:
        available_job = ['www.urbanhire.com','www.linkedin.com']
        return self.base_url in available_job

    @property
    def valid_scrape_url(self) -> bool:
        if self.base_url == 'www.linkedin.com':
            return '/jobs/view/' in self.url
        if self.base_url == 'www.urbanhire.com':
            return '/jobs/' in self.url

    def get_content(self) -> Dict[str,str]:
        res = requests.get(self.url).text
        soup = BeautifulSoup(res,"html.parser")
        self.soup = soup
        if self.base_url == 'www.linkedin.com':
            return self.scrape_linkedin()
        if self.base_url == 'www.urbanhire.com':
            return self.scrape_urbanhire()

    def scrape_linkedin(self) -> Dict[str,str]:
        try:
            image = self.soup.find("section",class_="topcard").a.img['data-delayed-url'].replace("&amp;","")
        except Exception:
            image = ""

        title_job = self.soup.find("h1",class_="topcard__title").text

        try:
            company = self.soup.find("h3",class_="topcard__flavor-row").a.text
        except Exception:
            company = self.soup.find("h3",class_="topcard__flavor-row").span.text

        location = self.soup.find("span",class_="topcard__flavor topcard__flavor--bullet").text
        raw_posted_applicant = self.soup.find_all("h3",class_="topcard__flavor-row")[1]
        posted = raw_posted_applicant.find_all("span")[0].text
        candidates = raw_posted_applicant.find_all("span")[1].text

        if not candidates:
            candidates = self.soup.find_all("h3",class_="topcard__flavor-row")[-1].figure.figcaption.text

        contents = self.soup.find("section",class_="description")
        contents = contents.find("div",class_="description__text description__text--rich")
        contents_text = contents.text.replace("•","").replace("\xa0\xa0\xa0"," ")

        ret = dict(
            image = image,
            title_job = title_job,
            company = company,
            location = location,
            posted = posted,
            candidates = candidates,
            contents = str(contents).replace("\xa0\xa0\xa0"," "),
            contents_text = contents_text
        )

        return ret

    def scrape_urbanhire(self) -> Dict[str,str]:
        pass
