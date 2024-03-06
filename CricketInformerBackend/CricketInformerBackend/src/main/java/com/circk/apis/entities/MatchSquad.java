package com.circk.apis.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class MatchSquad
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer Id;
    String teamImg;
    String teamName;
    String playerImg;
    String playerName;
    String playerRole;
    @JsonIgnore
    @ManyToOne
    Match match;

}
