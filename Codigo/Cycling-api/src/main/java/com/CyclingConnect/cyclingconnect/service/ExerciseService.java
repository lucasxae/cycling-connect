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

    public Exercise findById(Long id) {
        Optional<Exercise> exercicio = this.exercicioRepository.findById(id);
        return exercicio.orElseThrow(() -> new RuntimeException("Exercicio não encontrado"));
    }

    @Transactional
    public Exercise create(Exercise obj) {
        obj.setId(null);
        obj = this.exercicioRepository.save(obj);
        return obj;
    }

    @Transactional
    public Exercise update(Exercise obj){
        Exercise newObj = findById(obj.getId());
        newObj.setDescription(obj.getDescription());
        return this.exercicioRepository.save(newObj);
    }

    @Transactional
    public void delete(Long id){
        findById(id);
        try{
            this.exercicioRepository.deleteById(id);
        } catch (Exception e){
            throw new RuntimeException("Não é possivel excluir avaliação");
        }
    }

    

}
