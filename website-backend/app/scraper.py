import pandas as pd
from bs4 import BeautifulSoup
import requests

def scrape():
    r = requests.get('http://scoreboard.uscyberpatriot.org/')

    soup = BeautifulSoup(r.text, 'html.parser')
    table = soup.find('table')

    df = pd.read_html(str(table))[0]
    df.columns = df.iloc[0]
    df = df[1:]
    df.columns = df.columns.fillna('index')
    df = df.drop(df.columns[0], axis=1)
    df = df.astype({'Team Number': str, 'CCS Score': int})
    for id, team in df.iterrows():
        if 'Total Score' in team:
            continue
        else:
            if team['CCS Score'] == None:
                team['CCS Score'] = '0'
            ts = float(team['CCS Score'])
            if 'Adjust' in team:
                ts += float(team['Adjust'])
            if 'Challenge Score' in team:
                ts += float(team['Challenge Score'])
            if 'Cisco Score' in team:
                ts += float(team['Cisco Score'])
                print(team['Cisco Score'])
            df.at[id, 'Total Score'] = str(ts)
    df = df.rename(columns={'Team Number':'TeamNumber','Location/ Category':'Location/Category','Team Number':'TeamNumber',})
    df.to_csv('data/scoreboard.csv')