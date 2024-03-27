package com.CyclingConnect.cyclingconnect.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.User;
import java.util.List;

/**
 * Repositório para operações relacionadas a usuários.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Busca um usuário pelo login.
     * 
     * @param login O login do usuário a ser buscado.
     * @return Os detalhes do usuário encontrado.
     */
    UserDetails findByLogin(String login);

}
