package com.CyclingConnect.cyclingconnect.infra.security;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

/**
 * Um serviço para manipulação de tokens JWT (JSON Web Tokens).
 * Este serviço é responsável por gerar tokens JWT com base nas informações do usuário e validar tokens JWT recebidos.
 */
@Service
public class TokenService {
    // A chave secreta para assinar e verificar os tokens JWT
    @Value("{api.security.token.secret}")
    private String secret;

     /**
     * Gera um token JWT com base nas informações do usuário.
     * 
     * @param user O usuário para o qual o token será gerado.
     * @return O token JWT gerado.
     * @throws RuntimeException Se ocorrer um erro durante a geração do token.
     */
    public String generateToken(User user){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            String token = JWT.create()
                        .withIssuer("auth-api")
                        .withSubject(user.getLogin())
                        .withExpiresAt(genExpirationDate())
                        .sign(algorithm);
            return token;
        } catch (JWTCreationException e) {
            throw new RuntimeException("Error while generating token", e);
        }
    }

     /**
     * Valida um token JWT recebido e retorna o login do usuário associado ao token, se válido.
     * 
     * @param token O token JWT a ser validado.
     * @return O login do usuário associado ao token, se válido; caso contrário, uma string vazia.
     */
    public String validateToken(String token){
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("auth-api")
                    .build()
                    .verify(token)
                    .getSubject();
        } catch (JWTVerificationException e) {
            return "";
        }
    }

     /**
     * Gera a data de expiração do token.
     * Neste caso, a data de expiração é configurada para duas horas a partir do momento atual.
     * 
     * @return A data de expiração do token como um Instant.
     */
    private Instant genExpirationDate(){
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }

}
