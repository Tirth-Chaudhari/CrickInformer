package com.circk.apis.services.impl;

import com.circk.apis.entities.Match;
import com.circk.apis.repositories.MatchRepo;
import com.circk.apis.services.MatchService;

import java.awt.desktop.SystemSleepEvent;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;


@Service
public class MatchServiceImpl implements MatchService
{
    MatchRepo matchRepo;
    @Autowired
    public MatchServiceImpl(MatchRepo matchRepo)
    {
        this.matchRepo=matchRepo;
    }

    private final Object lock = new Object();



    public List<Match> getHistoryMatches()
    {
        List<Match> matches=matchRepo.findAll();
        System.out.println(matches);
        return  matches;
    }
    public List<List<String>> getUpcomingMatches()
    {

        String url = "https://www.cricbuzz.com/cricket-match/live-scores/upcoming-matches";
        List<List<String>> upcoming=new ArrayList<>();
        try {
            Document doc = Jsoup.connect(url).get();

            Elements internationalTabDivs = doc.select(".cb-col.cb-col-100.cb-plyr-tbody.cb-rank-hdr.cb-lv-main[ng-show='active_match_type == 'international-tab'']");
            if (internationalTabDivs.isEmpty()) {
                System.out.println("No international matches found.");
            } else {
                // Iterate over each div under international-tab
                for (Element div : internationalTabDivs)
                {
                    System.out.println("start div");

                    String title=div.selectFirst("h2").text();
                    Elements upcomingMatches=div.select(".cb-schdl");
                    System.out.println(title);
                    for(Element upcomingMatch:upcomingMatches)
                    {
                        String matchTitle = upcomingMatch.select("h3.cb-lv-scr-mtch-hdr a").text();
                        Elements detail  = upcomingMatch.select(".text-gray");
                        int count=0;
                        List<String> l=new ArrayList<>();
                        String matchNo="";
                        String location="";
                        for(Element m:detail)
                        {
                            if(count==0)
                            {
                                matchNo=m.text();
                                count++;

                            }
                            else
                            {
                                location=m.text();
                            }

                        }
                        System.out.println(matchTitle);
                        System.out.println(matchNo);
                        System.out.println(location);
                        l.add(title);
                        l.add(matchTitle);
                        l.add(matchNo);
                        l.add(location);
                        upcoming.add(l);
                    }
                    System.out.println();
                    System.out.println();
                }
            }
        } catch (IOException e) {
            // Handle IO exception
            e.printStackTrace();
        }
        return upcoming;
    }
    public List<Match> getAllMatches()
    {
        return this.matchRepo.findAll();
    }
    public List<Match> getLiveMatches()
    {
        System.out.println("******************   scraping start");
        List<Match> matches = new ArrayList<>();
        String href="";
        try {
            String url = "https://www.cricbuzz.com/cricket-match/live-scores";
            Document document = Jsoup.connect(url).get();

            Elements liveScoreElements = document.select("div.cb-mtch-lst.cb-tms-itm");

            for (Element match : liveScoreElements) {
                HashMap<String, String> liveMatchInfo = new LinkedHashMap<>();
                 String teamsHeading = match.select("h3.cb-lv-scr-mtch-hdr").select("a").text();
                 href = match.select("h3 > a").attr("href");
                href = href.replace("/live-cricket-scores/", "/live-cricket-scorecard/");
                String matchNumberVenue = match.select("span").text();
                Elements matchBatTeamInfo = match.select("div.cb-hmscg-bat-txt");

                String battingTeam = matchBatTeamInfo.select("div.cb-hmscg-tm-nm").text();
                String score = matchBatTeamInfo.select("div.cb-hmscg-tm-nm+div").text();
                Elements bowlTeamInfo = match.select("div.cb-hmscg-bwl-txt");
                String bowlTeam = bowlTeamInfo.select("div.cb-hmscg-tm-nm").text();
                String bowlTeamScore = bowlTeamInfo.select("div.cb-hmscg-tm-nm+div").text();
                String textLive = match.select("div.cb-text-live").text();
                String textComplete = match.select("div.cb-text-complete").text();
                //getting match link
//                String matchLink = match.select("a.cb-lv-scrs-well.cb-lv-scrs-well-live").attr("href").toString();
                String matchLink = href.replace("/live-cricket-scores/", "/live-cricket-scorecard/");
                Match match1=new Match();
                match1.setTeamHeading(teamsHeading);
                match1.setMatchNumberVenue(matchNumberVenue);
                match1.setBattingTeam(battingTeam);
                match1.setBattingTeamScore(score);
                    match1.setBowlTeam(bowlTeam);
                match1.setBowlTeamScore(bowlTeamScore);
                match1.setLiveText(textLive);
                match1.setMatchLink(matchLink);
                match1.setTextComplete(textComplete);
                match1.setMatchStatus();

                matches.add(match1);

//                update the match in database
                updateMatch(match1);


            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return matches;

    }



//
//     public List<List<String>> getPointTable()
//    {
//        List<List<String>> pointTable = new ArrayList<>();
//        String tableURL = "https://www.cricbuzz.com/cricket-series/7175/icc-under-19-world-cup-2024/points-table";
//        try {
//            Document document = Jsoup.connect(tableURL).get();
//            Elements table = document.select("table.cb-srs-pnts");
//            Elements tableHeads = table.select("thead>tr>*");
//            List<String> headers = new ArrayList<>();
//            tableHeads.forEach(element -> {
//                headers.add(element.text());
//            });
//            pointTable.add(headers);
//            Elements bodyTrs = table.select("tbody>*");
//            bodyTrs.forEach(tr -> {
//                List<String> points = new ArrayList<>();
//                if (tr.hasAttr("class")) {
//                    Elements tds = tr.select("td");
//                    String team = tds.get(0).select("div.cb-col-84").text();
//                    points.add(team);
//                    tds.forEach(td -> {
//                        if (!td.hasClass("cb-srs-pnts-name")) {
//                            points.add(td.text());
//                        }
//                    });
//
//                    pointTable.add(points);
//                }
//
//
//            });
//
//            System.out.println(pointTable);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return pointTable;
//
//    }


    private void updateMatch(Match match1) {

//        List<Match> match = matchRepo.findAllByTeamHeading(match1.getTeamHeading());

//        if (match == null || match.isEmpty()) {
//            matchRepo.save(match1);
//        } else {
//
//            match1.setMatchId(match.get(0).getMatchId());
//            this.matchRepo.save(match1);
//        }
        synchronized (lock) {
            System.out.println("find by teamheading");
            Match match = this.matchRepo.findByTeamHeading(match1.getTeamHeading()).orElse(null);
            if (match == null) {
                this.matchRepo.save(match1);
            } else {

                match1.setMatchId(match.getMatchId());
                this.matchRepo.save(match1);
            }
        }


//        List<Match> match = matchRepo.findAllByTeamHeading(match1.getTeamHeading());
//
//        if (match == null || match.isEmpty()) {
//            System.out.println("sve new data in data base");
//            matchRepo.save(match1);
//        } else {
//            System.out.println("get mathid and set it");
//            match1.setMatchId(match.get(0).getMatchId());
//
//            System.out.println("do update");
//            this.matchRepo.save(match1);
//        }

    }

}



