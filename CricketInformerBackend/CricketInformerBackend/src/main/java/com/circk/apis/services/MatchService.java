package com.circk.apis.services;

import com.circk.apis.entities.Match;
import com.circk.apis.entities.MatchSquad;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

public interface MatchService
{
    List<Match> getAllMatches();
    List<Match> getLiveMatches();
//    List<List<String>> getPointTable();
    List<List<String>> getUpcomingMatches();
    List<Match> getHistoryMatches();


}
