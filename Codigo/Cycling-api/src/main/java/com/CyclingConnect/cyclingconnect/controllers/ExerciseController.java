package com.CyclingConnect.cyclingconnect.controllers;

import java.time.DayOfWeek;
import java.time.LocalDate;

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
import com.CyclingConnect.cyclingconnect.service.ExerciseService;

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
    private ExerciseService exerciseService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/create")
    public ResponseEntity createExercise(@RequestBody @Valid ExerciseDTO data) {
            if (userRepository.findByEmail(data.email()) == null) {
                return ResponseEntity.badRequest().body("Usuário não encontrado.");
            }
            if (!exerciseService.verificaFormatoData(data.date())) {
                return ResponseEntity.badRequest().body("Formato da data incorreto");
            }
            String aux = data.date();
            String[] dataSeparada = aux.split("/");
            
            LocalDate dataCompleta = LocalDate.of(Integer.parseInt(dataSeparada[2]), Integer.parseInt(dataSeparada[1]), Integer.parseInt(dataSeparada[0]));
            LocalDate dataAtual = LocalDate.now();
            
            if (dataCompleta.isBefore(dataAtual)) {
                return ResponseEntity.badRequest().body("Data anterior a data atual");
            }

            DayOfWeek diaDaSemana = dataCompleta.getDayOfWeek();



            Exercise exercise = new Exercise(data.lapSpeed(), data.suggestedRoute(), data.exerciseTime(),
                    data.averageSpeed(), dataCompleta, exerciseService.transformandoDia(diaDaSemana));

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
