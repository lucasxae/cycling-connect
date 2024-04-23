package com.CyclingConnect.cyclingconnect.controllers;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.CyclingConnect.cyclingconnect.models.Exercise;
import com.CyclingConnect.cyclingconnect.service.ExerciseService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/exercise")
@Validated
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @GetMapping("/{id}")
    public ResponseEntity<Exercise> findById(@PathVariable Long id) {
        Exercise obj = this.exerciseService.findById(id);
        return ResponseEntity.ok().body(obj);
    }


    @PostMapping("/create")
    @Validated
    public ResponseEntity<Void> create( @Valid @RequestBody Exercise obj){
        this.exerciseService.create(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody Exercise obj, @PathVariable Long id) {
        obj.setId(id);
        this.exerciseService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        this.exerciseService.delete(id);
        return ResponseEntity.noContent().build();
    }

}