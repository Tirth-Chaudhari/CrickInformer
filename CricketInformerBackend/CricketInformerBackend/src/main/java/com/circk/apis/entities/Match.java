package com.circk.apis.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.YamlProcessor;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="crick_matches")
public class Match
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer matchId;



    String teamHeading;
    String MatchNumberVenue;
    String battingTeam;
    String battingTeamScore;
    String bowlTeam;
    String bowlTeamScore;
    String liveText;
    String matchLink;
    String textComplete;

    @JsonIgnore
//    @OneToMany(mappedBy = "match", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @OneToMany(mappedBy = "match")
    List<Batsman> batsmanList1;
    @JsonIgnore
    @OneToMany(mappedBy = "match1")
    List<Bawler> bawler;

    @OneToMany(mappedBy = "match")
    List<MatchSquad> matchSquads;

    int status;

    Date date=new Date();

    public void setMatchStatus() {
        if (this.textComplete.trim().isBlank()) {
            this.status = 1;
        } else {
            this.status = 0;
        }
    }

//
}
