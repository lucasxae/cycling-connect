package com.CyclingConnect.cyclingconnect.modules.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.modules.models.Athlete;
import com.CyclingConnect.cyclingconnect.modules.repositories.AthleteRepository;

import jakarta.transaction.Transactional;

@Service
public class AthleteService {

    @Autowired
    private AthleteRepository athleteRepository;

    @Transactional
    public Athlete createAtlhete(Athlete obj) {
        Athlete athlete = new Athlete();
        obj.setId(null);
        obj.setUser(athlete.getUser());
        obj = this.athleteRepository.save(obj);
        return obj;
    }

}
