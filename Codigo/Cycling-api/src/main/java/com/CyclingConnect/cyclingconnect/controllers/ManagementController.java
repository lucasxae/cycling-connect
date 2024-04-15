package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.service.ManagementService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/management")
public class ManagementController {

    @Autowired
    private ManagementService managementService;

    @PostMapping("/get-code")
    public String getCode(@RequestBody User user) {
        return managementService.RequestPasswordCode(user.getEmail());
    }

    @PostMapping("/validate-code")
    public String validateCode(@RequestBody User user) {
        return managementService.validateCode(user);
    }

    @PostMapping("/change-password")
    public String recoverPassword(@RequestBody User user) {
        return managementService.changePassword(user);
    }

    @PostMapping("/update-password")
    public String updatePassword(@RequestBody User user) {
        return managementService.updatePassword(user);
    }

}