package com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.Usuario;

/**
 * Repositório para operações relacionadas a usuários.
 */
@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, String>{

     /**
     * Busca um usuário pelo login.
     * 
     * @param login O login do usuário a ser buscado.
     * @return Os detalhes do usuário encontrado.
     */
    public UserDetails findByLogin(String login);

}

    
