package com.CyclingConnect.cyclingconnect.models.exercise;

public enum ExerciseSituation {

    CONCLUIDO("Concluído"),
    EM_ANDAMENTO("Em andamento"),
    PENDENTE("Pendente");

    private String description;

    private ExerciseSituation(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }

}
