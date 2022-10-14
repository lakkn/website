from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from scraper import *
from retriever import *

class Locate_Params(BaseModel):
    teams: List[str]


class Locate_Response(BaseModel):
    team_data: List[dict]


app = FastAPI(title="Website API")

client_hostname = 'lakshay.io'
origins = [f"http://{client_hostname}/", f"https://{client_hostname}/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*", origins],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

@app.post("/locate", tags=["Locate Data on Teams"])
def locate_teams(params: Locate_Params):
    """Retrieve data from scoreboard on cyberpatriot website
    """
    scrape()
    team_info = retrieve(params.teams)
    response = Locate_Response(team_data = team_info)
    return response