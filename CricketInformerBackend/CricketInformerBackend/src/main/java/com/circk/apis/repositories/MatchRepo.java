package com.circk.apis.repositories;

import com.circk.apis.entities.Match;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;


public interface MatchRepo extends JpaRepository<Match,Integer>
{
    Optional<Match> findByTeamHeading(String teamHeading);
    List<Match> findAllByTeamHeading(String teamHeading);
}
