package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.CyclingConnect.cyclingconnect.ServeInitializer;
import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.service.UserService;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jersey.JerseyProperties.Servlet;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{login}")
    public ResponseEntity<String> getUser(@PathVariable String login) {
        String entity = this.userService.findByLogin(login);
        return ResponseEntity.ok(entity);
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User entity) {
        this.userService.createUser(entity);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(entity.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    // @PutMapping("changePassword/{id}")
    // public String putMethodName(@PathVariable String id, @RequestBody String
    // entity) {
    // this.userService.updatePassword(id, entity);

    // return entity;
    // }
}
