package com.CyclingConnect.cyclingconnect.models.exercise;

import java.util.List;

public class ExerciseListDTO {

    private List<ExerciseDTO> exercises;

    public ExerciseListDTO() {
    }

    public ExerciseListDTO(List<ExerciseDTO> exercises) {
        this.exercises = exercises;
    }

    public List<ExerciseDTO> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseDTO> exercises) {
        this.exercises = exercises;
    }
}
