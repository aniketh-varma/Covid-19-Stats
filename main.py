import requests
response = requests.get('https://corona.lmao.ninja/v2/countries/India?yesterday=true')
fox=response.json()
print("{:,}".format(fox['cases']))

