package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.exercise.Exercise;
import com.CyclingConnect.cyclingconnect.models.exercise.ExerciseDTO;
import com.CyclingConnect.cyclingconnect.repositories.ExerciseRepository;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/exercise")
@Validated
public class ExerciseController {

    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity createExercise(@RequestBody @Valid ExerciseDTO data) {
            if (userRepository.findByEmail(data.email()) == null) {
                return ResponseEntity.badRequest().body("Usuário não encontrado.");
            }

            Exercise exercise = new Exercise(data.lapSpeed(), data.suggestedRoute(), data.exerciseTime(),
                    data.averageSpeed(), data.date());

            userRepository.findByEmailAsync(data.email()).addExercise(exercise);
            exerciseRepository.save(exercise);
            return ResponseEntity.ok().build();
        }

        @GetMapping("/getWeeklyExercise/{email}")
        public ResponseEntity getExercise(@PathVariable("email") String email) {
            if (userRepository.findByEmail(email) == null) {
                return ResponseEntity.badRequest().body("Usuário não encontrado.");
            }
        
            return ResponseEntity.ok().body(userRepository.findByEmailAsync(email).getLatestExercises());
        }
    
    }
