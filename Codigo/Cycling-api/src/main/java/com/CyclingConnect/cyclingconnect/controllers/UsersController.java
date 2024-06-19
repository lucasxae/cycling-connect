package com.CyclingConnect.cyclingconnect.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.service.UserService;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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


    /**
     * Recupera uma lista de usuários com o papel de "User", ou seja, todos os 
     * usuários que não são ADMIN.
     * 
     * Este método lida com requisições GET para o endpoint e retorna uma resposta
     * contendo a lista de usuários. Se nenhum usuário for encontrado, retorna uma
     * resposta de "404 Not Found" com uma mensagem apropriada.
     *
     * @return ResponseEntity contendo a lista de usuários ou uma mensagem de erro
     *         se nenhum usuário for encontrado.
     *         - HTTP 200 OK: Se a lista de usuários não estiver vazia.
     *         - HTTP 404 Not Found: Se nenhum usuário for encontrado no sistema.
     */
    @GetMapping("/getAthlete")
    public ResponseEntity getAthlete(){

        List<User> atletas = userService.getAthlete();

        if (atletas == null || atletas.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Não existem atletas no sistema");
        }

        return ResponseEntity.ok(atletas);
    }

    
}
