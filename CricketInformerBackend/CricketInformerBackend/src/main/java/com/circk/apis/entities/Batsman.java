package com.circk.apis.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Batsman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;
    String wicketDetail;
    long run;
    long ball;
    long fours;
    long six;
    double sr;
    String inning;

//    @ManyToOne(cascade = CascadeType.ALL,fetch =  FetchType.EAGER)
    @ManyToOne
    Match match;

}
