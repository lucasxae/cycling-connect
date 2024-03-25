package com.CyclingConnect.cyclingconnect.models;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Entidade que representa um usuário no sistema.
 */
@Entity
@Table(name = Usuario.TABLE_NAME)
public class Usuario implements UserDetails {
    
    public interface CreateUsuario {}
    public interface UpdateUsuario {}

    public static final String TABLE_NAME = "usuario";

    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true)
    private Integer id;

    @Id
    @Column(name = "login", length = 100, unique = true)
    private String login;

    @Column(name = "senha", length = 60)
    @Nonnull
    private String senha;
    
    @Column(name = "role", length = 60)
    @Nonnull
    private TipoUsuario role;

    @Column(name = "email", length = 60)
    @Nonnull
    private String email;

    @Column(name = "genero", length = 1)
    private char genero;

    @Column(name = "celular", length = 15)
    private String celular;

    public Usuario(){
    }


    public Usuario(Integer id, String usuario, String senha, TipoUsuario role, String email, char genero, String celular) {
        this.id = id;
        this.login = usuario;
        this.senha = senha;
        this.role = role;
        this.email = email;
        this.genero = genero;
        this.celular = celular;
    }
    

    public Integer getId() {
        return this.id;
    }

    public String getUsuario() {
        return this.login;
    }

    public void setUsuario(String login) {
        this.login = login;
    }

    public String getSenha() {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public TipoUsuario getRole() {
        return this.role;
    }

    public void setRole(TipoUsuario role) {
        this.role = role;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char getGenero() {
        return this.genero;
    }

    public void setGenero(char genero) {
        this.genero = genero;
    }

    public String getCelular() {
        return this.celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null || getClass() != obj.getClass())
            return false;
        Usuario other = (Usuario) obj;
        return Objects.equals(login, other.login);
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == TipoUsuario.ADMIN){
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        }else{
            return List.of(new SimpleGrantedAuthority("ROLE_USER"));
        }
    }


    @Override
    public String getPassword() {
        return senha;
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
        // TODO Auto-generated method stub
        return true;
    }

}
