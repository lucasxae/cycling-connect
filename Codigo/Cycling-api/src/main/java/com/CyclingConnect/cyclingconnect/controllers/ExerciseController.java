package com.CyclingConnect.cyclingconnect.controllers;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.exercise.Exercise;
import com.CyclingConnect.cyclingconnect.models.exercise.ExerciseDTO;
import com.CyclingConnect.cyclingconnect.models.exercise.ExerciseListDTO;
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

    /**
     * Cria um novo exercício com base nos dados fornecidos.
     *
     * @param dataList Os dados dos exercícios a serem criados.
     * @return ResponseEntity Uma resposta HTTP indicando o resultado da criação.
     */
    @PostMapping("/create")
    public ResponseEntity createExercise(@RequestBody @Valid ExerciseListDTO dataList) {

        List<ExerciseDTO> exercises = dataList.getExercises();

        for (ExerciseDTO data : exercises) {
            if (userRepository.findByEmail(data.email()) == null) {
                return ResponseEntity.badRequest().body("Usuário não encontrado.");
            }
            if (!exerciseService.verificaFormatoData(data.date())) {
                return ResponseEntity.badRequest().body("Formato da data incorreto");
            }

            if (data.totalDistance() <= 0 || data.totalDistance() == null) {
                return ResponseEntity.badRequest().body("Distancia total menor ou igual a 0km");
            }

            if (data.totalDistance() >= 3000) {
                return ResponseEntity.badRequest().body("Distancia total maior ou igual a 3000km");
            }

            List<Exercise> mesmaData = userRepository.findByEmailAsync(data.email()).getExercises();

            for(Exercise exercise : mesmaData){
                if (exercise.getDate().equals(data.date())) {
                    return ResponseEntity.badRequest().body("Ja possui um exercicio na mesma data");
                }
            }


            String aux = data.date();
            String[] dataSeparada = aux.split("/");

            LocalDate dataCompleta = LocalDate.of(Integer.parseInt(dataSeparada[2]), Integer.parseInt(dataSeparada[1]),
                    Integer.parseInt(dataSeparada[0]));
            LocalDate dataAtual = LocalDate.now();

            if (dataCompleta.isBefore(dataAtual)) {
                return ResponseEntity.badRequest().body("Data anterior a data atual");
            }

            DayOfWeek diaDaSemana = dataCompleta.getDayOfWeek();

            Exercise exercise = new Exercise(data.lapSpeed(), data.suggestedRoute(), data.duration(),
                    data.averageSpeed(), data.totalDistance(), data.intesity(), data.date(),
                    exerciseService.transformandoDia(diaDaSemana));

            userRepository.findByEmailAsync(data.email()).addExercise(exercise);
            exerciseRepository.save(exercise);
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    /**
     * Obtém os exercícios da semana atual para um determinado usuário.
     *
     * @param email O email do usuário para o qual os exercícios serão obtidos.
     * @return ResponseEntity Uma resposta HTTP contendo os exercícios obtidos.
     */
    @GetMapping("/getWeeklyExercise/{email}")
    public ResponseEntity getExercise(@PathVariable("email") String email) {
        if (userRepository.findByEmail(email) == null) {
            return ResponseEntity.badRequest().body("Usuário não encontrado.");
        }
        try {
            List<Exercise> exercises = exerciseService.getExercisesForCurrentWeekByUserEmail(email);
            return ResponseEntity.ok().body(exercises);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Erro ao buscar exercícios: " + e.getMessage());
        }
    }

}
