import os
from typing import Dict, List
from langdetect import detect_langs
from ibm_watson import NaturalLanguageUnderstandingV1
from ibm_watson import LanguageTranslatorV3
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
from ibm_watson.natural_language_understanding_v1 import Features, ConceptsOptions, KeywordsOptions

class IBM_NLP:
    def __init__(self,text: str):
        self.text = text

    def check_english_content(self) -> "IBM_NLP":
        check = detect_langs(self.text)

        detector_en = True
        another_lan = None
        for x in check:
            if x.__dict__['lang'] != "en":
                another_lan = x.__dict__['lang']
                detector_en = False

        self.detector_en = detector_en
        self.another_lan = another_lan

    def translate_content(self) -> "IBM_NLP":
        authenticator = IAMAuthenticator(os.getenv("IBM_LAN_API"))
        language_translator = LanguageTranslatorV3(
            version='2018-05-01',
            authenticator=authenticator
        )

        language_translator.set_service_url(os.getenv("IBM_LAN_URL"))

        translation = language_translator.translate(
            text=self.text,
            model_id=f'{self.another_lan}-en'
        ).get_result()

        self.text = translation['translations'][0]['translation']

    @property
    def get_concept_keyword(self) -> Dict[str,List]:
        authenticator = IAMAuthenticator(os.getenv("IBM_NLP_API"))
        natural_language_understanding = NaturalLanguageUnderstandingV1(
            version='2019-07-12',
            authenticator=authenticator
        )

        natural_language_understanding.set_service_url(os.getenv("IBM_NLP_URL"))

        res = natural_language_understanding.analyze(
            text = self.text,
            features=Features(
                keywords=KeywordsOptions(limit=20),
                concepts=ConceptsOptions(limit=20),
            )).get_result()

        keywords = [keyword['text'] for keyword in res['keywords']]
        concepts = [concept['text'] for concept in res['concepts']]
        result = dict(
            keywords = keywords,
            concepts = concepts
        )

        return result
