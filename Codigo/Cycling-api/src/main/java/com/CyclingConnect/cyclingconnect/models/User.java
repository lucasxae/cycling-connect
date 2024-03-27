package com.CyclingConnect.cyclingconnect.models;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = User.TABLE_NAME)
public class User {

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

    @Column(name = "cpf", length = 11, unique = true, nullable = false)
    private String cpf;

    @Column(name = "type", nullable = false, length = 50, unique = false)
    private String type;

    @Column(name = "email", length = 50, unique = true, nullable = false)
    private String email;

    @Column(name = "phone", length = 50, unique = true, nullable = false)
    private String phone;

    @Column(name = "gender", length = 50, unique = false, nullable = false)
    private String gender;

    @Column(name = "profileUrl", length = 5000, unique = false, nullable = true)
    private String profileUrl;

    @Column(name = "password", length = 60)
    @Nonnull
    private String password;

    public User() {
    }

    public User(Integer id, String login, String cpf, String type, String email, String phone, String gender,
            String profileUrl, String password) {
        this.id = id;
        this.login = login;
        this.cpf = cpf;
        this.type = type;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.profileUrl = profileUrl;
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

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
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

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getProfileUrl() {
        return this.profileUrl;
    }

    public void setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}