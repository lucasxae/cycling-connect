package com.CyclingConnect.cyclingconnect.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.models.UserRole;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String updateUser(User user, String email) {

        User userBd = userRepository.findByEmailAsync(email);
        try {
            if (userBd != null) {
                if (user.getUsername() != null) {
                    userBd.setUserName(user.getUsername());
                }
                if (user.getBirthdate() != null) {
                    userBd.setBirthdate(user.getBirthdate());
                }
                if (String.valueOf(user.getGender()) != null) {
                    userBd.setGender(String.valueOf(user.getGender()));
                }
                if (user.getLocale() != null) {
                    userBd.setLocale(user.getLocale());
                }
                if (user.getPhoneNumber() != null) {
                    userBd.setPhoneNumber(user.getPhoneNumber());
                }
                if (user.gerProfilePicUrl() != null) {
                    userBd.setProfilePicUrl(user.gerProfilePicUrl());
                }

                userRepository.save(userBd);
                return "Dado do usuario alterado com sucesso!";
            } else {
                return "Usuário não encontrado!";
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Código inválido");
        }
    }

    public String deleteByEmail(String email) {
        try {
            userRepository.deleteByEmail(email);
            return "Usuário deletado!";

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Código inválido");
        }

    }

    public String UpdateByEmail(String currentEmail, String newEmail) {
        try {
            User userBd = userRepository.findByEmailAsync(currentEmail);

            userBd.setEmail(newEmail);
            userRepository.saveAndFlush(userBd);
            return "Email alterado com sucesso!";

        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Código inválido");
        }
    }

    /**
     * Recupera uma lista de usuários com o papel de "Atleta".
     * 
     * Este método consulta o repositório de usuários para encontrar todos os usuários
     * que possuem o papel de "USER", que representa um atleta.
     *
     * @return Lista de usuários que possuem o papel de "Atleta".
     */
    public List<User> getAthlete(){
        return userRepository.findByRole(UserRole.USER);
    }
}
