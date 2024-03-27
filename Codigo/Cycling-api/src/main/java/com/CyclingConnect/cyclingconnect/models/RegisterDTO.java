package com.CyclingConnect.cyclingconnect.models;

public record RegisterDTO(String login, String password, UserType role, String phone, char gender, String birthdate, String email) {
    
}
