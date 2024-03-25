package com.CyclingConnect.cyclingconnect.modules.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.CyclingConnect.cyclingconnect.ServeInitializer;
import com.CyclingConnect.cyclingconnect.modules.models.Athlete;
import com.CyclingConnect.cyclingconnect.modules.services.AthleteService;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jersey.JerseyProperties.Servlet;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/athlete")
@Validated
public class AthleteController {

    @Autowired
    private AthleteService athleteService;

    @PostMapping
    public ResponseEntity<Athlete> createAthlete(@RequestBody Athlete entity) {
        this.athleteService.createAtlhete(entity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(entity.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

}
