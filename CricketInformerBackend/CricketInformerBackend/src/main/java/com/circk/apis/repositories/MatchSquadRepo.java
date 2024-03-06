package com.circk.apis.repositories;

import com.circk.apis.entities.Match;
import com.circk.apis.entities.MatchSquad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchSquadRepo extends JpaRepository<MatchSquad,Integer>
{


}
