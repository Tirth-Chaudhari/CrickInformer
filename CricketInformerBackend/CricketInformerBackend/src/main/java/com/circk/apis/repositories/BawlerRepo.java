package com.circk.apis.repositories;

import com.circk.apis.entities.Bawler;
import com.circk.apis.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BawlerRepo extends JpaRepository<Bawler, Integer> {
    void deleteAllByMatch1(Match match);
}
