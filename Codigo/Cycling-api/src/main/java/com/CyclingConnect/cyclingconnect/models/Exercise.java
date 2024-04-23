package com.CyclingConnect.cyclingconnect.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Column(name = "description")
    private String description;

    @Column(name = "start")
    private String start;

    @Column(name = "end")
    private String fim;

    @Column(name = "situation")
    private ExerciseSituation situation;

    public Exercise(String description, String inicio, String fim) {

        this.description = description;
        this.start = inicio;
        this.fim = fim;
        situation = situation.PENDENTE;
    }
}
