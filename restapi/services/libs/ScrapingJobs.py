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
        top_content = self.soup.find("main",class_="main")

        try:
            image = top_content.find("img")['data-delayed-url'].replace("&amp;","")
        except Exception:
            image = ""

        title_job = top_content.find("h2",class_="topcard__title").text

        try:
            company = top_content.find("h3",class_="topcard__flavor-row").a.text
        except Exception:
            company = top_content.find("h3",class_="topcard__flavor-row").span.text

        location = top_content.find("span",class_="topcard__flavor topcard__flavor--bullet").text
        raw_posted_applicant = top_content.find_all("h3",class_="topcard__flavor-row")[1]
        posted = raw_posted_applicant.find_all("span")[0].text

        contents = self.soup.find("section",class_="description")
        contents = contents.find("div",class_="show-more-less-html__markup show-more-less-html__markup--clamp-after-5")
        contents_text = contents.text.replace("•","").replace("\xa0\xa0\xa0"," ")

        ret = dict(
            image = image,
            title_job = title_job,
            company = company,
            location = location,
            posted = posted,
            contents = str(contents).replace("\xa0\xa0\xa0"," "),
            contents_text = contents_text
        )

        return ret

    def scrape_urbanhire(self) -> Dict[str,str]:
        image = self.soup.find("div",class_="col-lg-2 col-md-2 col-sm-2 col-xs-12").img["src"]

        raw_job_header = self.soup.find("div",class_="wrap container") \
            .find("div",class_="col-lg-10 col-md-10 col-sm-10 col-xs-12")

        title_job = raw_job_header.find_all("h1")[0].text

        company = raw_job_header.find_all("a")[0].text
        location = raw_job_header.find_all("a")[1].text
        raw_posted = raw_job_header.find_all("div",class_="m-b-sm")[1]
        posted = " ".join(raw_posted.find_all("span")[2].text.split(" ")[2:])

        raw_contents = self.soup.find_all("div",class_="wrap container")[1].find("div",class_="col-xs-12 col-sm-8").div
        raw_contents = raw_contents.find_all("article")[1:]
        contents = ""
        contents_text = ""
        for index,content in enumerate(raw_contents):
            try:
                if index == 0:
                    contents += "<h5>Description</h5>"
                if index == 1:
                    contents += "<h5>Requirement</h5>"
                contents += str(content.div)
                contents_text += str(content.div.text)
            except Exception:
                pass

            if index == 1:
                break

        ret = dict(
            image = image,
            title_job = title_job,
            company = company,
            location = location,
            posted = posted,
            contents = contents,
            contents_text = contents_text
        )

        return ret
