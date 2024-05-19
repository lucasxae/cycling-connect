package com.CyclingConnect.cyclingconnect.models.exercise;

import java.time.LocalDate;

import com.CyclingConnect.cyclingconnect.models.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = Exercise.TABLE_NAME)
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Setter
@EqualsAndHashCode(of = "id")
public class Exercise {

    public static final String TABLE_NAME = "exercise";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Long id;

    @Column(name = "lapSpeed")
    @Size(min = 5, message = "Velocidade da volta deve ter no minimo 5 caracteres")
    private String lapSpeed;

    @Column(name = "suggestedRoute")
    @Size(min = 5, message = "Rota sugerida deve ter no minimo 5 caracteres")
    private String suggestedRoute;

    @Column(name = "duration")
    @Size(min = 3, message = "Duração deve ter no minimo 3 caracteres")
    private String duration;

    @Column(name = "averageSpeed")
    private Integer averageSpeed;

    @Column(name = "totalDistance")
    private Integer totalDistance;

    @Column(name = "intensity")
    @Size(min = 3, message = "Intensidade deve ter no minimo 3 caracteres")
    private String intensity;

    @Column(name = "status")
    private ExerciseSituation status;

    @Column(name = "data")
    private LocalDate date;

    @Column(name = "diaSemana")
    private String diaSemana;

    public Exercise (String lapSpeed, String suggestedRoute, String duration, Integer averageSpeed, Integer totalDistance, String intensity, LocalDate date, String diaSemana) {
        this.lapSpeed = lapSpeed;
        this.suggestedRoute = suggestedRoute;
        this.duration = duration;
        this.averageSpeed = averageSpeed;
        this.date = date;
        this.diaSemana = diaSemana;
        this.intensity = intensity;
        this.totalDistance = totalDistance;
        this.status = ExerciseSituation.PENDENTE;
    }
}
