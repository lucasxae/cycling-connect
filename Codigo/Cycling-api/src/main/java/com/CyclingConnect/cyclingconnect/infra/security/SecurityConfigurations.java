package com.CyclingConnect.cyclingconnect.infra.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

/**
 * Configurações de segurança para a aplicação.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    /**
     * Configura o filtro de segurança para definir as políticas de segurança da
     * aplicação.
     * 
     * @param httpSecurity O objeto HttpSecurity para configurar as políticas de
     *                     segurança.
     * @return Um filtro de segurança configurado com as políticas especificadas.
     * @throws Exception Se ocorrer um erro ao configurar as políticas de segurança.
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers(HttpMethod.POST, "/exercise").hasRole("ADMIN")
                        .anyRequest().authenticated())
                .build();
    }
}
