package com.CyclingConnect.cyclingconnect.models.feedback;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
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
@Table(name = "Newfeedbacks")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    @Size(min = 4, message = "O feedback deve ter no minimo 4 caracteres")
    @NotNull
    private String nome;

    @Column(name = "nota")
    @NotNull
    private int nota;

    @Column(name = "disponibilidadeFutura")
    @Size(min = 4, message = "O feedback deve ter no minimo 4 caracteres")
    @NotNull
    private String disponibilidadeFutura;

    @Column(name = "statusFeedback")
    @Size(min = 4, message = "O feedback deve ter no minimo 4 caracteres")
    @NotNull
    private String statusFeedback;

    @Column(name = "details")
    @Lob
    @Size(min = 4, max = 4000, message = "O feedback deve ter no minimo 4 caracteres")
    @NotNull
    private String details;

    /**
     * Construtor da classe Feedback.
     *
     * @param nome                  Nome do usuário.
     * @param nota                  Nota do feedback.
     * @param disponibilidadeFutura Disponibilidade futura do usuário.
     * @param statusFeedback        Status do feedback.
     * @param details               Detalhes do feedback.
     */
    public Feedback(String nome, int nota, String disponibilidadeFutura, String statusFeedback, String details) {
        this.nome = nome;
        this.nota = nota;
        this.disponibilidadeFutura = disponibilidadeFutura;
        this.statusFeedback = statusFeedback;
        this.details = details;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getNota() {
        return this.nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getDisponibilidadeFutura() {
        return this.disponibilidadeFutura;
    }

    public void setDisponibilidadeFutura(String disponibilidadeFutura) {
        this.disponibilidadeFutura = disponibilidadeFutura;
    }

    public String getStatusFeedback() {
        return this.statusFeedback;
    }

    public void setStatusFeedback(String statusFeedback) {
        this.statusFeedback = statusFeedback;
    }

    public String getDetails() {
        return this.details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

}
/*
 * [
 * {
 * "id": 1,
 * "nome": "Ciclista Exemplo",
 * "nota": 5,
 * "disponibilidadeFutura": "2 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 2,
 * "nome": "Ciclista Exemplo",
 * "nota": 2,
 * "disponibilidadeFutura": "3 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 3,
 * "nome": "Ciclista Exemplo",
 * "nota": 4,
 * "disponibilidadeFutura": "2 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 4,
 * "nome": "Ciclista Exemplo",
 * "nota": 4,
 * "disponibilidadeFutura": "5 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 5,
 * "nome": "Ciclista Exemplo",
 * "nota": 1,
 * "disponibilidadeFutura": "3 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 6,
 * "nome": "Ciclista Exemplo",
 * "nota": 3,
 * "disponibilidadeFutura": "7 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 *   }
 * ]
 * 
 * 
 * 
 * 
 */