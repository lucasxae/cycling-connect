package com.CyclingConnect.cyclingconnect.models.feedback;

/**
 * Data Transfer Object (DTO) para transferir dados de feedback.
 *
 * @param weeklyFeedback        Feedback da semana.
 * @param nextWeekAvailability  Disponibilidade para a próxima semana.
 * @param nextWeekSuggestions   Sugestões para a próxima semana.
 * @param email                 Email do usuário associado ao feedback.
 */
public record FeedbackDTO(String weeklyFeedback, String nextWeekAvailability, String nextWeekSuggestions, String email) {
    
}
