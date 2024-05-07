package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.service.UserService;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/api/users")
public class UsersController {

    @Autowired
    private UserService userService;

    @PutMapping("/updateEmail/{currentEmail}")
    public String updateEmail(@PathVariable String currentEmail, @RequestBody User user) {
        return userService.UpdateByEmail(currentEmail, user.getEmail());
    }

    @DeleteMapping("/deleteByEmail/{email}")
    public String deleteByEmail(@PathVariable String email) {
        return userService.deleteByEmail(email);
    }

    @PutMapping("/updateUserData/{email}")
    public String updateUserData(@RequestBody User user, @PathVariable String email) {
        return userService.updateUser(user, email);
    }
}
