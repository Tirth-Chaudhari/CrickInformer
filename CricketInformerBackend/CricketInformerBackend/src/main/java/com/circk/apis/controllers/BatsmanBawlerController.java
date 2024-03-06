package com.circk.apis.controllers;

import com.circk.apis.entities.Batsman;
import com.circk.apis.entities.Bawler;
import com.circk.apis.entities.Match;
import com.circk.apis.services.BatBallService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match/batsman-bawler")
@CrossOrigin(origins = "http://localhost:3000")
public class BatsmanBawlerController {
    @Autowired
    BatBallService batBallService;

    @GetMapping("/live/{matchId}")
    public ResponseEntity<Match> getLiveMatch(@PathVariable("matchId") Integer matchid)
    {
        return new ResponseEntity<>(batBallService.getLiveMatch(matchid), HttpStatus.OK);

    }
    @GetMapping("/getBatsmanList/{matchId}")
    public ResponseEntity<List<Batsman>> getBatsmanList(@PathVariable("matchId") Integer matchid)
    {
        return new ResponseEntity<>(batBallService.getBatsmanList(matchid), HttpStatus.OK);

    }
    @GetMapping("/getBawlerList/{matchId}")
    public ResponseEntity<List<Bawler>> getBawlerList(@PathVariable("matchId") Integer matchid)
    {
        return new ResponseEntity<>(batBallService.getBawlerList(matchid), HttpStatus.OK);

    }


}
