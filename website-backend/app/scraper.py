import pandas as pd

def scrape():
    try:
        url = "http://scoreboard.uscyberpatriot.org/"

        scoreboard = pd.read_html(url)
        df = scoreboard[0]
        df.columns = df.iloc[0]
        df = df[1:]
        df.columns = df.columns.fillna('qdrop')
        df = df.drop(df.columns[[0]], axis=1)
        for id, team in df.iterrows():
            if 'TotalScore' in team:
                continue
            else:
                if team['CCSScore'] == None:
                    team['CCSScore'] = '0'
                ts = float(team['CCSScore'])
                if 'Adjust' in team:
                    ts += float(team['Adjust'])
                if 'ChallengeScore' in team:
                    ts += float(team['ChallengeScore'])
                if 'CiscoScore' in team:
                    ts += float(team['CiscoScore'])
                df.at[id, 'TotalScore'] = str(ts)

        df.to_csv('data/scoreboard.csv')
    except:
        print("no tables")