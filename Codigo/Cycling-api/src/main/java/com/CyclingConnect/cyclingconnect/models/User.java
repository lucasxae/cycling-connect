package com.CyclingConnect.cyclingconnect.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.CyclingConnect.cyclingconnect.models.exercise.Exercise;
import com.CyclingConnect.cyclingconnect.models.feedback.Feedback;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = User.TABLE_NAME)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
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

    @Column(name = "login", length = 30, unique = true, nullable = false)
    @Size(min = 3, max = 30, message = "O login deve ter no minimo 3 caracteres")
    private String login;

    @Column(name = "cpf", unique = true, nullable = true)
    @Size(min = 11, max = 11, message = "O número de CPF deve ter 11 caracteres")
    private String cpf;

    @Column(name = "role", nullable = false)
    private UserRole role;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "phone", unique = true, nullable = false)
    @Size(min = 11, max = 14, message = "O número de telefone deve ter entre 11 e 14 caracteres")
    private String phone;

    @Column(name = "gender", length = 2, nullable = false)
    private char gender;

    @Column(name = "birthdate", nullable = false)
    private String birthdate;

    @Column(name = "password", nullable = false)
    @Size(min = 5, message = "A senha deve ter no minimo 6 caracteres")
    private String password;

    @OneToOne
    private Feedback feedback;

    @OneToMany
    private List<Exercise> exercises = new ArrayList<>();

    @Column(name = "password_code", nullable = true)
    private String recuperationCode;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_validation_code", nullable = true)
    private Date dataValidationCode;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_send_code", nullable = true)
    private Date dataSendCode;

    @Column(name = "login_token", unique = true, nullable = true)
    private String loginToken;

    @Column(name = "locale", nullable = true)
    private String locale;

    @Column(name = "profile_pic_url", nullable = true)
    private String profilePicUrl;

    public User(String login, String password, UserRole role, String phone, char gender, String birthdate, String email,
            String cpf, String recuperationCode, Date dataValidationCode, Date dataSendCode, String loginToken,
            String locale, String profilePicUrl) {
        this.login = login;
        this.password = password;
        this.role = role;
        this.phone = phone;
        this.birthdate = birthdate;
        this.gender = gender;
        this.cpf = cpf;
        this.email = email;
        this.recuperationCode = recuperationCode;
        this.dataValidationCode = dataValidationCode;
        this.dataSendCode = dataSendCode;
        this.loginToken = loginToken;
        this.locale = locale;
        this.profilePicUrl = profilePicUrl;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UserRole.ADMIN)
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        else
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return email;
    }

    public void setUserName(String login) {
        this.login = login;
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

    public String setCode(String recuperationCode) {
        return this.recuperationCode = recuperationCode;
    }

    public Date getCodeExpiration() {
        return dataValidationCode;
    }

    public void setCodeExpiration(Date dataValidationCode) {
        this.dataValidationCode = dataValidationCode;
    }

    public void setSendCode(Date data) {
        this.dataSendCode = data;
    }

    public String getLoginToken() {
        return this.loginToken;
    }

    public void setLoginToken(String loginToken) {
        this.loginToken = loginToken;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBirthdate() {
        return this.birthdate;
    }

    public void setBirthdate(String date) {
        this.birthdate = date;
    }

    public char getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        gender = gender.toLowerCase();
        char[] genderArray = gender.toCharArray();
        if (genderArray[0] == 'f') {
            this.gender = 'F';
        } else {
            this.gender = 'M';
        }
    }

    public String getLocale() {
        return this.locale;
    }

    public void setLocale(String newLocale) {
        this.locale = newLocale;
    }

    public String getPhoneNumber() {
        return this.phone;
    }

    public void setPhoneNumber(String number) {
        this.phone = number;
    }

    public void addExercise(Exercise exercise) {
        this.exercises.add(exercise);
    }

    public String gerProfilePicUrl() {
        return this.profilePicUrl;
    }

    public void setProfilePicUrl(String url) {
        this.profilePicUrl = url;
    }
}
