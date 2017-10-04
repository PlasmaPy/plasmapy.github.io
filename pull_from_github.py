import requests as re

OUTPUT_DIR = "web/pages/"
BASE_URL = "https://raw.githubusercontent.com/PlasmaPy/PlasmaPy/master/"
PAGES = {
    "conduct":{
        "filename": OUTPUT_DIR + "conduct.md",
        "url": BASE_URL + "CODE_OF_CONDUCT.md"
    },
    "contribute":{
        "filename": OUTPUT_DIR + "contribute.md",
        "url": BASE_URL + "CONTRIBUTING.md"
    }
}

for page in PAGES.values():
    content = re.get(page["url"]).content
    with open(page["filename"], "w+") as f:
        f.write(content.decode("utf-8"))
