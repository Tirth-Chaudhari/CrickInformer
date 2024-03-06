package com.circk.apis.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Bawler
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    String name;
    Double over;
    Long maiden;
    Long run;
    Long wicket;
    Long noBall;
    Long wide;
    Double eco;
    String inning;

//    @ManyToOne(cascade = CascadeType.ALL, fetch =  FetchType.EAGER)
    @ManyToOne
    Match match1;

}
