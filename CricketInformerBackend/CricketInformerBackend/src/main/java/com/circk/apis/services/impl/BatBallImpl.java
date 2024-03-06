package com.circk.apis.services.impl;

import com.circk.apis.entities.Batsman;
import com.circk.apis.entities.Bawler;
import com.circk.apis.entities.Match;
import com.circk.apis.repositories.BatsmanRepo;
import com.circk.apis.repositories.BawlerRepo;
import com.circk.apis.repositories.MatchRepo;
import com.circk.apis.services.BatBallService;
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
public class BatBallImpl implements BatBallService
{
    @Autowired
    MatchRepo matchRepo;
    @Autowired
    BatsmanRepo batsmanRepo;
    @Autowired
    BawlerRepo bawlerRepo;

    public List<Batsman> getBatsmanList(Integer matchId)
    {
        Match match = matchRepo.findById(matchId).orElse(null);

        List<Batsman> batsmanList=match.getBatsmanList1();
        return batsmanList;
    }
    public List<Bawler> getBawlerList(Integer matchId)
    {
        Match match = matchRepo.findById(matchId).orElse(null);

        List<Bawler> bawlerList=match.getBawler();
        return bawlerList;

    }
    @Override
    public Match getLiveMatch(Integer matchId) {


        Match match = matchRepo.findById(matchId).orElse(null);

        List<Batsman> batsmanList=match.getBatsmanList1();
        if(!batsmanList.isEmpty() || batsmanList!=null ) {
                for (Batsman i : batsmanList) {
                    batsmanRepo.delete(i);


                }
        }





        List<Bawler> bawlerList=match.getBawler();

        if(!bawlerList.isEmpty() || bawlerList!=null)
        {
            for(Bawler i:bawlerList)
            {
                bawlerRepo.delete(i);
            }
        }

        List<Bawler> bwer = new ArrayList<>();

        List<Batsman> bat = new ArrayList<>();

        match.setBawler(bwer);
        match.setBatsmanList1(bat);

        matchRepo.save(match);

        List<Batsman> batsman =new ArrayList<>();
        List<Bawler> bawler =new ArrayList<>();

        if(match != null)
        {

            String url = "https://www.cricbuzz.com/" + match.getMatchLink();

            try {

                Document document1 = Jsoup.connect(url).get();
                Elements table = document1.getElementsByClass("cb-ltst-wgt-hdr");
                String inning="";
                for (Element score : table)
                {



                    Element subHeader = score.selectFirst(".cb-scrd-sub-hdr");
                    Elements player = score.select(".cb-scrd-itms");

                    String toss = "";

                    if (subHeader != null) {
                        Elements firstDiv = subHeader.select(" > div");
                        if (firstDiv != null) {
                            // Extract the text content of the first div element
                            toss = firstDiv.text();
//                    System.out.println(toss);

                        }
                    }
                    int count1=0;
                    for (Element p : player)
                    {
                        Bawler bw = new Bawler();
                        Batsman bt = new Batsman();



                        String name = p.select(".cb-col > a").text();
                        if (toss.contains("Batter"))
                        {
                            inning=score.selectFirst(".cb-scrd-hdr-rw > span").text();

                            if (name != null)
                            {

                                System.out.println(name);
//                                bt.setName(name);
                            }
                            String pinfo = p.select(".cb-col> span").text();
//                            bt.setWicketDetail(pinfo);
                            System.out.println(pinfo);
                            Elements run = p.select(".text-right");
                            int count = 0;
                            Long run1=0L;
                            Long ball=0L;
                            Long four=0L;
                            Long six=0L;
                            Double sr=0D;
                            for (Element r : run) {

                                String r1 = r.text();
                                System.out.println(r1);
                                if (count == 0) {
                                    run1 = Long.parseLong(r1);

                                    count++;
                                } else if (count == 1) {
                                    ball = Long.parseLong(r1);
                                    count++;
                                } else if (count == 2) {
                                    four = Long.parseLong(r1);
                                    count++;
                                } else if (count == 3) {
                                    six = Long.parseLong(r1);
                                    count++;

                                } else if (count == 4) {

                                    sr = Double.parseDouble(r1);


                                    count++;
                                }
//                            System.out.println(r1);
                            }
                            bt.setName(name);
                            bt.setWicketDetail(pinfo);
                            bt.setRun(run1);
                            bt.setBall(ball);
                            bt.setFours(four);
                            bt.setSix(six);
                            bt.setSr(sr);
                            bt.setInning(inning);


                            bt.setMatch(match);
                            batsmanRepo.save(bt);

                            batsman.add(bt);

                        }
                         else if(toss.contains("Bowler"))
                         {
                            if(name!=null)
                            {
                                bw.setName(name);
                                System.out.println(name);
                            }
                            Elements run = p.select(".text-right");
                            int count = 0;
                            for (Element r : run) {

                                String r1 = r.text();
                                System.out.println(r1);
                                if (count == 0) {
                                    Double r3=Double.parseDouble(r1);
                                    bw.setOver(r3);
                                    count++;
                                } else if (count == 1) {
                                    Long r2 = Long.parseLong(r1);
                                    bw.setMaiden(r2);
                                    count++;
                                } else if (count == 2) {
                                    Long r2 = Long.parseLong(r1);
                                    bw.setRun(r2);
                                    count++;
                                } else if (count == 3) {
                                    Long r2 = Long.parseLong(r1);
                                    bw.setWicket(r2);
                                    count++;

                                } else if (count == 4) {
                                    Long r2 = Long.parseLong(r1);
                                    bw.setNoBall(r2);
                                    count++;
                                }
                                else if(count==5)
                                {
                                    Long r2 = Long.parseLong(r1);
                                    bw.setWide(r2);
                                    count++;
                                }
                                else if(count==6)
                                {
                                    Double r3=Double.parseDouble(r1);
//                                    System.out.println(r3);
                                    bw.setEco(r3);
                                    count++;

                                }
//                            System.out.println(r1);
                            }
                            bw.setMatch1(match);
                            bw.setInning(inning);
                            bawlerRepo.save(bw);

                             bawler.add(bw);
                        }


                    }
                    if(toss.contains("Batter")) {
                        match.setBatsmanList1(batsman);
                        System.out.println("batsman complete");
                        matchRepo.save(match);
                    }
                    else if(toss.contains("Bowler")) {
                        match.setBawler(bawler);
                        matchRepo.save(match);
                    }

                }

            }
            catch (IOException e) {

            }

        }

//        batsmanRepo.deleteAllByMatch(null);
//        return batsman;

        return match;
    }
}
