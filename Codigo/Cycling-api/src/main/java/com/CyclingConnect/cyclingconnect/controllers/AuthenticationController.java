package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.infra.security.TokenService;
import com.CyclingConnect.cyclingconnect.models.AuthenticationDTO;
import com.CyclingConnect.cyclingconnect.models.LoginResponseDTO;
import com.CyclingConnect.cyclingconnect.models.RegisterDTO;
import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    /**
     * Endpoint para autenticar um usuário.
     * @param data Os dados de autenticação do usuário.
     * @return Um ResponseEntity contendo o token de autenticação se a autenticação for bem-sucedida.
     */
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User)auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    /**
     * Endpoint para registrar um novo usuário.
     * @param data Os dados do novo usuário.
     * @return Um ResponseEntity indicando se o registro foi bem-sucedido.
     */
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if (this.userRepository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.login(), encryptedPassword, data.role(), data.phone(), data.gender(), data.birthdate(), data.email(), data.cpf());
            
        this.userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }

    /**
     * Endpoint para obter todos os usuários.
     * @return Um ResponseEntity contendo a lista de todos os usuários registrados.
     */
    @GetMapping("/allUsers")
    public ResponseEntity allUsers(){
        return ResponseEntity.ok(this.userRepository.findAll());
    }
}