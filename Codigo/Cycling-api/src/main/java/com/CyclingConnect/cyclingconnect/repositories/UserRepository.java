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
public interface UserRepository extends JpaRepository<User, Integer> {


    UserDetails findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findByEmailAsync(String email);

}
