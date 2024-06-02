package com.CyclingConnect.cyclingconnect.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import jakarta.servlet.DispatcherType;

/**
 * Configurações de segurança para a aplicação.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfigurations {

    @Autowired
    SecurityFilter securityFilter;

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
                        .dispatcherTypeMatchers(DispatcherType.ERROR).permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/register").permitAll()
                        .requestMatchers(HttpMethod.GET, "/auth/allUsers").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/auth/changePassword/{username}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/auth/findByEmail/{email}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/management/get-code").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/management/change-password").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/management/update-password").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/management/validate-code").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/logout").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/users/updateEmail/{currentEmail}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/api/users/updateUserData/{email}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/api/users/deleteByEmail/{email}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/exercise/create").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/feedback/create").permitAll()
                        .requestMatchers(HttpMethod.GET, "/feedback").permitAll()
                        .requestMatchers(HttpMethod.POST, "/events/create").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/events/delete").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/events/getEvents").permitAll()
                        .requestMatchers(HttpMethod.GET, "/exercise/getWeeklyExercise/{email}").permitAll()
                        .anyRequest().authenticated())
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    /**
     * Retorna o bean do gerenciador de autenticação.
     * 
     * @return O gerenciador de autenticação configurado.
     * @throws Exception Se ocorrer um erro ao obter o gerenciador de autenticação.
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    /**
     * Retorna o bean do codificador de senha.
     * 
     * @return O codificador de senha configurado.
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}