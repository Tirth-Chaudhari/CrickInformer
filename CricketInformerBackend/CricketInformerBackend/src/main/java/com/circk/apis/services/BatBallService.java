package com.circk.apis.services;

import com.circk.apis.entities.Batsman;
import com.circk.apis.entities.Bawler;
import com.circk.apis.entities.Match;
import org.springframework.stereotype.Service;

import java.util.List;


public interface BatBallService
{
    public Match getLiveMatch(Integer matchId);
    public List<Batsman> getBatsmanList(Integer matchId);
    public List<Bawler> getBawlerList(Integer matchId);

}
