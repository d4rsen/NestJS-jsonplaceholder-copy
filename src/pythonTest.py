BASE_URL = "https://jsonplaceholder-copy.vercel.app/todos/"
BASE_URL2 = "https://jsonplaceholder-copy.vercel.app/users/"
BASE_URL3 = "https://jsonplaceholder-copy.vercel.app/posts/"
BASE_URL4 = "https://jsonplaceholder-copy.vercel.app/comments/"
BASE_URL5 = "https://jsonplaceholder-copy.vercel.app/albums/"

def find_weather_for() -> dict:
    resp = requests.get(BASE_URL)
    return resp.json()