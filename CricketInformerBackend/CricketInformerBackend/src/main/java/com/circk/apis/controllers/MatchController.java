package com.circk.apis.controllers;

import com.circk.apis.entities.Match;
import com.circk.apis.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchController
{
//    @Autowired
    MatchService matchService;
    @Autowired
    public MatchController(MatchService matchService)
    {
        this.matchService=matchService;
    }
    @GetMapping("/live")
    public ResponseEntity<List<Match>> getLiveMatches()
    {
        return new ResponseEntity<>(matchService.getLiveMatches(), HttpStatus.OK);

    }
    @GetMapping("/history")
    public ResponseEntity<List<Match>> getHistoryMatches()
    {
        return new ResponseEntity<>(matchService.getHistoryMatches(),HttpStatus.OK);
    }
//    @GetMapping("/point-table")
//    public ResponseEntity<?> getCWC2023PointTable() {
//        return new ResponseEntity<>(matchService.getPointTable(), HttpStatus.OK);
//    }
    @GetMapping("/upcoming")
    public ResponseEntity<List<List<String>>> getUpcomingMatches()
    {
        return new ResponseEntity<>(this.matchService.getUpcomingMatches(), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches()
    {
        return new ResponseEntity<>(this.matchService.getAllMatches(), HttpStatus.OK);
    }

}
