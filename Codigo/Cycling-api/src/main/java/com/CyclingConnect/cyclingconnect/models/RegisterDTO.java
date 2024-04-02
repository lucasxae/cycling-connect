package com.CyclingConnect.cyclingconnect.models;

/**
 * Um objeto de transferência de dados (DTO) para o registro de novos usuários.
 * Contém os campos necessários para criar um novo usuário no sistema.
 */
public record RegisterDTO(String login, String password, UserRole role, String phone, char gender, String birthdate, String email, String cpf) {
    
}
