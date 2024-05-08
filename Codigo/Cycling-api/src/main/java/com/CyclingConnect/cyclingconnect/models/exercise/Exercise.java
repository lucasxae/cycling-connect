package com.CyclingConnect.cyclingconnect.models.exercise;

import java.time.DayOfWeek;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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
    private String lapSpeed;

    @Column(name = "suggestedRoute")
    private String suggestedRoute;

    @Column(name = "exerciseTime")
    private String exerciseTime;

    @Column(name = "averageSpeed")
    private Integer averageSpeed;

    @Column(name = "situation")
    private ExerciseSituation situation;

    @Column(name = "data")
    private LocalDate date;

    @Column(name = "diaSemana")
    private String diaSemana;

    public Exercise (String lapSpeed, String suggestedRoute, String exerciseTime, Integer averageSpeed, LocalDate date, String diaSemana) {
        this.lapSpeed = lapSpeed;
        this.suggestedRoute = suggestedRoute;
        this.exerciseTime = exerciseTime;
        this.averageSpeed = averageSpeed;
        this.date = date;
        this.diaSemana = diaSemana;
        this.situation = ExerciseSituation.PENDENTE;
    }
}
