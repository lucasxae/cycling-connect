package com.CyclingConnect.cyclingconnect.models;


/**
 * Um objeto de transferência de dados (DTO) para autenticação.
 * Contém o login e a senha do usuário.
 */
public record AuthenticationDTO(String email, String password) {
    
}
