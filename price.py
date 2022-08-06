from bs4 import BeautifulSoup
import json
import requests
import datetime

LINKS = ['http://astromebel.ru/catalog/divany', 'http://astromebel.ru/catalog/divany/page-2', 'http://astromebel.ru/catalog/divany/page-3']
HEADERS = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
}
def save_pages(urls):
 

    for idx, page in enumerate(urls):
        response = requests.get(url=page, headers=HEADERS)


        with open(f'page_{idx}_.html', 'w') as file:
            file.write(response.text)
    return print("[INFO] Complete!!!")

# save_pages(LINKS)

def get_items_url():
    for i in range(3):

        with open(f'page_{i}_.html') as file:
            src = file.read()
    
        soup = BeautifulSoup(src, "html.parser")
        items = soup.select(".items_list li")
        dict_data = []
        
        for elem in items:
            title = elem.find('h3')            
            name = title.get_text().strip()
            price = elem.find('div', 'price').get_text().strip()
            dict_data.append(
                {
                    "name": name,
                    # "URL": f'{url}{link}',
                    "price": price[3:-5]
                    
                }
            )
        print(f"[INFO] Complete {i} page..")
        with open(f'price.json', 'a') as file:
            json.dump(dict_data, file, indent=4, ensure_ascii=False)
        
# get_items_url()

def work_per_unit():

    with open('price.json') as file:
        items = json.load(file)


    for item in items:
        print(item["name"])
    