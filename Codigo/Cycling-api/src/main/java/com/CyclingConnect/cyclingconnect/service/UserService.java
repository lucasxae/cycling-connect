package com.CyclingConnect.cyclingconnect.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String updateUser(User user, String email) {
        User userBd = userRepository.findByEmailAsync(email);

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

            userRepository.save(userBd);
            return "Dado do usuario alterado com sucesso!";
        } else {
            return "Erro ao alterar dados do usuario!";
        }
    }

    public String deleteByEmail(String email) {
        User userBd = userRepository.findByEmailAsync(email);
        if (userBd != null) {
            userRepository.deleteByEmail(email);
            return "Usuário deletado!";
        } else {
            return "Usuário não encontrado!";
        }
    }

    public String UpdateByEmail(String currentEmail, String newEmail) {
        User userBd = userRepository.findByEmailAsync(currentEmail);

        if (userBd != null) {
            userBd.setEmail(newEmail);
            userRepository.saveAndFlush(userBd);
            return "Email alterado com sucesso!";
        } else {
            return "Erro ao alterar email!";
        }
    }
}
