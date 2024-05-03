package com.CyclingConnect.cyclingconnect.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.Exercise;
import com.CyclingConnect.cyclingconnect.repositories.ExerciseRepository;

import jakarta.transaction.Transactional;

@Service
public class ExerciseService {
    
    @Autowired
    private ExerciseRepository exercicioRepository;

    

}
