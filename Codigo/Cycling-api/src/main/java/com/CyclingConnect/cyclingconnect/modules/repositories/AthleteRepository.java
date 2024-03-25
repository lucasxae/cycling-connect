package com.CyclingConnect.cyclingconnect.modules.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.modules.models.Athlete;

import jakarta.transaction.Transactional;

@Repository
public interface AthleteRepository extends JpaRepository<Athlete, Integer> {

    @Transactional
    Athlete findByUser(String cpf);
}
