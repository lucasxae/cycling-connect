package com.CyclingConnect.cyclingconnect.models.exercise;

public record ExerciseDTO(String lapSpeed, String suggestedRoute, String exerciseTime, Integer averageSpeed,
        ExerciseDate date, String email) {

}
