package com.CyclingConnect.cyclingconnect.models.feedback;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Entidade que representa o feedback de um usuário.
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@Table(name = "feedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "weeklyFeedback")
    @Size(min = 4, message = "O feedback deve ter no minimo 4 caracteres")
    @NotNull
    private String weeklyFeedback;

    @Column(name = "nextWeekAvailability")
    @NotNull
    private int nextWeekAvailability;

    @Column(name = "nextWeekSuggestions")
    private int nextWeekSuggestions;

    /**
     * Construtor para a classe Feedback.
     *
     * @param weeklyFeedback       Feedback da semana atual.
     * @param nextWeekAvailability Disponibilidade para a próxima semana.
     * @param nextWeekSuggestions  Sugestões para a próxima semana.
     */
    public Feedback(String weeklyFeedback, int nextWeekAvailability, int nextWeekSuggestions) {
        this.weeklyFeedback = weeklyFeedback;
        this.nextWeekAvailability = nextWeekAvailability;
        this.nextWeekSuggestions = nextWeekSuggestions;
    }

}
