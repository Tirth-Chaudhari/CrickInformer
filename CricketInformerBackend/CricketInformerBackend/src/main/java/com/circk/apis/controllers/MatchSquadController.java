package com.circk.apis.controllers;


import com.circk.apis.entities.Match;
import com.circk.apis.entities.MatchSquad;
import com.circk.apis.services.MatchSquadService;
import jakarta.persistence.GeneratedValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin(origins = "http://localhost:3000")
public class MatchSquadController
{
    @Autowired
    MatchSquadService matchSquadService;

    @GetMapping("/squad/{matchId}")
    public ResponseEntity<List<MatchSquad>> getMatchSquad(@PathVariable("matchId") Integer matchid)
    {
        return  new ResponseEntity<>(matchSquadService.getMatchSquad(matchid), HttpStatus.OK);

    }
}
