package com.CyclingConnect.cyclingconnect.models;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = User.TABLE_NAME)
public class User implements UserDetails {

    public interface CreateUser {
    }

    public interface UpdateUser {
    }

    public static final String TABLE_NAME = "user";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "login", length = 100, unique = true, nullable = false)
    private String login;

    @Column(name = "cpf", length = 11, unique = true, nullable = true)
    private String cpf;

    @Column(name = "type", nullable = false)
    private UserType type;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "phone", length = 50, unique = true, nullable = false)
    private String phone;

    @Column(name = "gender", length = 50, nullable = false)
    private char gender;

    @Column(name = "birthdate", nullable = false)
    private String birthdate;

    @Column(name = "password", nullable = false)
    private String password;

    public User() {
    }

    public User(String login, String password, UserType role, String phone, char gender, String birthdate, String email,
            String cpf) {
        this.login = login;
        this.password = password;
        this.type = role;
        this.phone = phone;
        this.birthdate = birthdate;
        this.gender = gender;
        this.cpf = cpf;
    }

    public User(Integer id, String login, String cpf, UserType type, String email, String phone, char gender,
            String profileUrl, String password) {
        this.id = id;
        this.login = login;
        this.cpf = cpf;
        this.type = type;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.password = password;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogin() {
        return this.login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public UserType getType() {
        return this.type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public char getGender() {
        return this.gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.type == UserType.ADMIN)
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

}