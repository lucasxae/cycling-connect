package com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.events.Events;
import java.util.List;


@Repository
public interface EventsRepository extends JpaRepository<Events, Long> {

    List<Events> findByTitle(String title);

}