package com.circk.apis.repositories;

import com.circk.apis.entities.Batsman;
import com.circk.apis.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatsmanRepo extends JpaRepository<Batsman, Integer>
{
    void deleteAllByMatch(Match match);
}
