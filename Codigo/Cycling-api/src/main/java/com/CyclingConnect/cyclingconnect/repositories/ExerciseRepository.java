package com.CyclingConnect.cyclingconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.exercise.Exercise;

@Repository
public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    Optional<Exercise> findById(Long id);
}
