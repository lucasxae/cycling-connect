package com.CyclingConnect.cyclingconnect.models.exercise;

public enum ExerciseDate {

    SEGUNDA("Segunda"),
    TERCA("Terça"),
    QUARTA("Quarta"),
    QUINTA("Quinta"),
    SEXTA("Sexta");

    private String description;

    private ExerciseDate(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

}
