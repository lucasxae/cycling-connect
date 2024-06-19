package com.CyclingConnect.cyclingconnect.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.models.UserRole;

import jakarta.transaction.Transactional;
import java.util.List;


/**
 * Repositório para operações relacionadas a usuários.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    List<User> findByRole(UserRole role);

    UserDetails findByEmail(String email);

    @Query("SELECT u FROM User u WHERE u.email = :email")
    User findByEmailAsync(String email);

    @Query("SELECT u FROM User u WHERE u.email = :email AND u.recuperationCode = :recuperationCode")
    User findByEmailAndCode(String email, String recuperationCode);

    @Query("SELECT u FROM User u WHERE u.loginToken = :loginToken")
    User findByToken(String login);

    @Query("UPDATE User u SET u.email = :novoEmail WHERE u.email = :email")
    User updateByEmail(String email, String novoEmail);

    @Transactional
    @Modifying
    @Query("DELETE FROM User u WHERE u.email = :email")
    void deleteByEmail(String email);
}
