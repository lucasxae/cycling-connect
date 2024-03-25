package com.CyclingConnect.cyclingconnect.modules.models;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Athlete.TABLE_NAME)
public class Athlete {

    public interface CreateAtlhete {
    }

    public interface UpdateAtlhete {
    }

    public static final String TABLE_NAME = "athlete";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "user", length = 100, unique = true)
    private String user;

    @Column(name = "cpf", length = 11, unique = true, nullable = false)
    private String cpf;

    @Column(name = "email", length = 50, unique = true, nullable = false)
    private String email;

    @Column(name = "phone", length = 50, unique = true, nullable = false)
    private String phone;

    @Column(name = "gender", length = 50, unique = true, nullable = false)
    private String gender;

    @Column(name = "profileUrl", length = 5000, unique = false, nullable = true)
    private String profileUrl;

    @Column(name = "password", length = 60)
    @Nonnull
    private String password;

    public Athlete() {
    }

    public Athlete(Integer id, String user, String cpf, String email, String phone, String gender, String profileUrl,
            String password) {
        this.id = id;
        this.user = user;
        this.cpf = cpf;
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

    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
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
