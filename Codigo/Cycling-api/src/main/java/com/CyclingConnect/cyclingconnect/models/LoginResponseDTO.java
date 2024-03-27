package com.CyclingConnect.cyclingconnect.models;

/**
 * Um objeto de transferência de dados (DTO) para a resposta de login.
 * Contém o token de autenticação gerado após o login bem-sucedido.
 */
public record LoginResponseDTO(String token) {
    
}
