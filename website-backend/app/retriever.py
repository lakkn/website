import pandas as pd
import math

def retrieve(teams):
    df = pd.read_csv('data/scoreboard.csv')
    prefix = df['TeamNumber'].iat[0][0:3]
    team_info = []
    for team in teams:
        formatted = {}
        team_num = prefix+str(team)
        info = df.loc[df['TeamNumber'] == team_num]
        if len(info) > 0:
            formatted['TeamNumber'] = info['TeamNumber'].iat[0]
            formatted['Division'] = info['Division'].iat[0]
            formatted['Tier'] = info['Tier'].iat[0]
            formatted['State'] = info['Location/Category'].iat[0]
            formatted['ImageScore'] = info['CCSScore'].iat[0]
            if 'CiscoScore' in info.columns:
                formatted['CiscoScore'] = info['CiscoScore'].iat[0]
            if 'Adjust' in info.columns:
                formatted['AdjustedScore'] = info['Adjust'].iat[0]
            if 'ChallengeScore' in info.columns:
                formatted['ChallengeScore'] = info['ChallengeScore'].iat[0]
            if 'TotalScore' in info.columns:
                formatted['TotalScore'] = info['TotalScore'].iat[0]
            formatted['Place'] = int(info['index'].iat[0])
            if formatted['Place'] != 1:
                formatted['PointsBelow'] = float(df['TotalScore'].iat[formatted['Place']-2]) - float(formatted['TotalScore'])
            else:
                formatted['PointsBelow'] = 0.0
            if formatted['Place'] != len(df.index):
                formatted['PointsAbove'] = float(formatted['TotalScore']) - float(df['TotalScore'].iat[formatted['Place']])
            else:
                formatted['PointsAbove'] = 0.0
            formatted['PointsBelowFirst'] = float(df['TotalScore'].iat[0]) - float(formatted['TotalScore'])
            formatted['Percentile'] = round((100 - 100*(formatted['Place']/len(df.index))), 1)
            peerteamsdivision = df.loc[df['Division'] == info['Division'].iat[0]]
            formatted['TotalTeamsDivision'] = len(peerteamsdivision.index)
            peerteamstier = peerteamsdivision.loc[df['Tier'] == info['Tier'].iat[0]]
            formatted['TotalTeamsTier'] = len(peerteamstier.index)
            peerteamsstate = peerteamstier.loc[df['Location/Category'] == info['Location/Category'].iat[0]]
            formatted['TotalTeamsState'] = len(peerteamsstate.index)
            formatted['DivisionRank'] = peerteamsdivision['TeamNumber'].tolist().index(team_num) + 1
            formatted['TierRank'] = peerteamstier['TeamNumber'].tolist().index(team_num) + 1
            formatted['StateRank'] = peerteamsstate['TeamNumber'].tolist().index(team_num) + 1
            formatted['InvalidTeam'] = 0
            team_info.append(formatted)
        else:
            formatted['TeamNumber'] = team_num
            formatted['InvalidTeam'] = 1
            team_info.append(formatted)
    return team_info