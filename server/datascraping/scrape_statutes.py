import json
import requests


def main():
    baseURL = 'https://hrs.plus/'

    with open('catchlines.json') as data_file:
        chapter_sections = json.load(data_file)

    Statutes = []

    for chapter_section in chapter_sections:
        try:
            statute = requests.get(baseURL + '/json/' +
                                   chapter_section["citation"] + '.json')
            statuteData = json.loads(statute.text)
            Statutes.append(statuteData)

        except json.decoder.JSONDecodeError:
            print(chapter_section["citation"])

    hrsData = {"Statutes": Statutes}

    outfile = open('hrs.json', 'w')
    json.dump(hrsData, outfile)
    print("Data scraped into hrs.json")


if __name__ == '__main__':
    main()
