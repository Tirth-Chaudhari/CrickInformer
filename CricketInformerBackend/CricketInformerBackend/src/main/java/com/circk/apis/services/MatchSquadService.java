package com.circk.apis.services;

import com.circk.apis.entities.Match;
import com.circk.apis.entities.MatchSquad;

import java.util.List;

public interface MatchSquadService
{
    public List<MatchSquad> getMatchSquad(Integer matchId);
}
