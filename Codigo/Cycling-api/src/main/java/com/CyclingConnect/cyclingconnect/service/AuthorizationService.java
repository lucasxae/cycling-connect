package com.CyclingConnect.cyclingconnect.service;

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
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    /**
     * Faz a requisição de atualizar a senha do usuário.
     * 
     * @param newPassword A nova senha do usuário.
     * @return Booleano que indica se a senha foi atualizada.
     */
    public User changeUserPassword(String newPassword, String email) {
        User user = repository.findByEmailAsync(email);
        user.getPassword();
        user.setPassword(newPassword);
        return repository.save(user);
    }
}
