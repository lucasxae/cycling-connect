package com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CyclingConnect.cyclingconnect.models.feedback.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback , Long> {
 
}