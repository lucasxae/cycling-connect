package com.CyclingConnect.cyclingconnect.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String findByLogin(String login) {
        User user = (User) this.userRepository.findByLogin(login);
        if (user.getLogin().equals(login)) {
            return user.getLogin();
        } else {
            throw new UsernameNotFoundException("User not found with login: " + login);
        }
    }

    @Transactional
    public User createUser(User obj) {
        obj.setId(null);
        obj = this.userRepository.save(obj);
        return obj;
    }

    // public void updatePassword(String login, String newPassword) {
    //     Optional<User> user = userRepository.findByLog(login);
    //     if (user.isPresent()) {
    //         User actualUser = user.get();
    //         actualUser.setPassword(newPassword);
    //         userRepository.save(actualUser);
    //     } else {
    //         throw new UsernameNotFoundException("User not found with login: " + login);
    //     }
    // }
}