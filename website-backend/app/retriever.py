import pandas as pd
import math

def retrieve(teams):
    df = pd.read_csv('data/scoreboard.csv')
    df.rename(columns={'Unnamed: 0': 'rank'}, inplace=True)
    prefix = df['Team Number'].iat[0][0:3]
    team_info = []
    for team in teams:
        formatted = {}
        team_num = prefix+str(team)
        info = df.loc[df['Team Number'] == team_num]
        if len(info) > 0:
            formatted['TeamNumber'] = info['Team Number'].iat[0]
            formatted['Division'] = info['Division'].iat[0]
            formatted['Tier'] = info['Tier'].iat[0]
            formatted['State'] = info['Location/ Category'].iat[0]
            formatted['ImageScore'] = info['CCS Score'].iat[0]
            if 'Cisco Score' in info.columns:
                formatted['CiscoScore'] = info['Cisco Score'].iat[0]
            if 'Adjust' in info.columns:
                formatted['AdjustedScore'] = info['Adjust'].iat[0]
            if 'Challenge Score' in info.columns:
                formatted['ChallengeScore'] = info['Challenge Score'].iat[0]
            if 'Total Score' in info.columns:
                formatted['TotalScore'] = info['Total Score'].iat[0]
            formatted['Place'] = int(info['rank'].iat[0])
            if formatted['Place'] != 1:
                formatted['PointsBelow'] = float(df['Total Score'].iat[formatted['Place']-2]) - float(formatted['TotalScore'])
            else:
                formatted['PointsBelow'] = 0.0
            if formatted['Place'] != len(df.index):
                formatted['PointsAbove'] = float(formatted['TotalScore']) - float(df['Total Score'].iat[formatted['Place']])
            else:
                formatted['PointsAbove'] = 0.0
            formatted['PointsBelowFirst'] = float(df['Total Score'].iat[0]) - float(formatted['TotalScore'])
            formatted['Percentile'] = round((100 - 100*(formatted['Place']/len(df.index))), 1)
            peerteamsdivision = df.loc[df['Division'] == info['Division'].iat[0]]
            formatted['TotalTeamsDivision'] = len(peerteamsdivision.index)
            peerteamstier = peerteamsdivision.loc[df['Tier'] == info['Tier'].iat[0]]
            formatted['TotalTeamsTier'] = len(peerteamstier.index)
            peerteamsstate = peerteamstier.loc[df['Location/ Category'] == info['Location/ Category'].iat[0]]
            formatted['TotalTeamsState'] = len(peerteamsstate.index)
            formatted['DivisionRank'] = peerteamsdivision['Team Number'].tolist().index(team_num) + 1
            formatted['TierRank'] = peerteamstier['Team Number'].tolist().index(team_num) + 1
            formatted['StateRank'] = peerteamsstate['Team Number'].tolist().index(team_num) + 1
            formatted['InvalidTeam'] = 0
            formatted['ImageScore'] = int(formatted['ImageScore'])
            formatted['TotalScore'] = float(formatted['TotalScore'])
            team_info.append(formatted)
        else:
            formatted['TeamNumber'] = team_num
            formatted['InvalidTeam'] = 1
            team_info.append(formatted)
    return team_info