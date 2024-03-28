package com.CyclingConnect.cyclingconnect.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

/**
 * Serviço para autenticação de usuários.
 */
@Service
public class AuthorizationService implements UserDetailsService {

    @Autowired
    UserRepository repository;

    /**
     * Carrega um usuário pelo nome de usuário (login).
     * 
     * @param username O nome de usuário (login) do usuário a ser carregado.
     * @return Os detalhes do usuário encontrado.
     * @throws UsernameNotFoundException Se o usuário com o nome de usuário
     *                                   fornecido não puder ser encontrado.
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository.findByLogin(username);
    }

}
