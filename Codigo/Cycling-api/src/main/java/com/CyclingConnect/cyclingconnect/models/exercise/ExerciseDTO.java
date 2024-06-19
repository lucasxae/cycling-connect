package com.CyclingConnect.cyclingconnect.models.exercise;

/**
 * Data Transfer Object (DTO) para transferir dados de exercício.
 *
 * @param lapSpeed        Velocidade por volta do exercício.
 * @param suggestedRoute  Rota sugerida para o exercício.
 * @param duration        Duração do exercício.
 * @param averageSpeed    Velocidade média durante o exercício.
 * @param totalDistance   Distância total percorrida no exercício.
 * @param intensity       Intensidade do exercício.
 * @param date            Data do exercício.
 * @param email           Email do usuário associado ao exercício.
 */
public record ExerciseDTO(String lapSpeed, String suggestedRoute, String duration, Integer averageSpeed, Integer totalDistance, String intesity ,
        String date, String email) {

}
