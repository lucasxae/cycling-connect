package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.CyclingConnect.cyclingconnect.service.ExerciseService;


@RestController
@RequestMapping("/exercise")
@Validated
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

}