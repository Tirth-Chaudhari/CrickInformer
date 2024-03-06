package com.circk.apis.services.impl;

import com.circk.apis.entities.Batsman;
import com.circk.apis.entities.Bawler;
import com.circk.apis.entities.Match;
import com.circk.apis.entities.MatchSquad;
import com.circk.apis.repositories.MatchRepo;
import com.circk.apis.repositories.MatchSquadRepo;
import com.circk.apis.services.MatchSquadService;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class MatchSquadImpl implements MatchSquadService
{
    @Autowired
    MatchRepo matchRepo;
    @Autowired
    MatchSquadRepo matchSquadRepo;
    @Override
    public List<MatchSquad> getMatchSquad(Integer matchId)
    {


        Match match = matchRepo.findById(matchId).orElse(null);
        String url=match.getMatchLink();
        url = "https://www.cricbuzz.com"+url.replace("live-cricket-scorecard","cricket-match-squads");

        System.out.println(match);
        List<MatchSquad> mts=match.getMatchSquads();
        System.out.println(mts+"getting");
        if(!mts.isEmpty() || mts!=null)
        {
            for(MatchSquad i:mts)
            {
                matchSquadRepo.delete(i);
            }
        }

       List<MatchSquad> lst=new ArrayList<>();

        match.setMatchSquads(lst);
        matchRepo.save(match);


        try
        {

            Document document = Jsoup.connect(url).get();
            Element team1Img=document.selectFirst(".cb-team1 img");
            String  team1ImgUrl=team1Img.attr("src");
            Element team2Img =document.selectFirst(".cb-team2 img");
            String team2ImgUrl=team2Img.attr("src");


            String team1name = document.selectFirst(".cb-team1 div:eq(1)").text().trim();
            String team2name=document.selectFirst(".cb-team2 div:eq(1)").text().trim();

            Element team1=document.selectFirst(".cb-play11-lft-col");
            Elements team1Player=team1.select(".cb-player-card-left");
            List<MatchSquad> ml=new ArrayList<>();
            for(Element player:team1Player)
            {
                MatchSquad ms=new MatchSquad();

                String pimg=player.select(".cb-plyr-img-left").attr("src");

                String pname=player.selectFirst(".cb-player-name-left div").ownText().trim();

                String role="";

                if(player.selectFirst(".cb-player-name-left span")!=null)
                {
                    role=player.selectFirst(".cb-player-name-left span").text().trim();
                }
                else if(player.select("span:nth-of-type(2)").first()!=null)
                {
                    role = player.select("span:nth-of-type(2)").first().text();


                }

                ms.setTeamName(team1name);
                ms.setTeamImg(team1ImgUrl);
                ms.setPlayerName(pname);
                ms.setPlayerRole(role);
                ms.setPlayerImg(pimg);
                ms.setMatch(match);
                matchSquadRepo.save(ms);
                ml.add(ms);

            }

            Element team2=document.selectFirst(".cb-play11-rt-col");
//            System.out.println(team2);
            Elements team2Player=team2.select(".cb-player-card-right");
            for(Element player:team2Player)
            {
                MatchSquad ms=new MatchSquad();
//                System.out.println(player);
                String pimg=player.select(".cb-plyr-img-right").attr("src");
                String pname=player.selectFirst(".cb-player-name-right div").ownText().trim();
                String role="";
                if(player.selectFirst(".cb-player-name-right span")!=null)
                {
                    role=player.selectFirst(".cb-player-name-right span").text().trim();

                }
                else if(player.select("span:nth-of-type(2)").first()!=null)
                {
                    role = player.select("span:nth-of-type(2)").first().text();

                }
                System.out.println(pimg);
                System.out.println(pname);
                System.out.println(role);
                ms.setTeamName(team2name);
                ms.setTeamImg(team2ImgUrl);
                ms.setPlayerName(pname);
                ms.setPlayerRole(role);
                ms.setPlayerImg(pimg);
                ms.setMatch(match);
                matchSquadRepo.save(ms);
                ml.add(ms);


            }

            match.setMatchSquads(ml);
            matchRepo.save(match);
            return ml;

        }
        catch (IOException e)
        {

        }


        return null;
    }
}
