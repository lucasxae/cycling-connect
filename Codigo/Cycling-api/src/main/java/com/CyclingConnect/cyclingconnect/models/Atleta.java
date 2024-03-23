package com.CyclingConnect.cyclingconnect.models;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = Atleta.TABLE_NAME)
public class Atleta {
    
    public interface CreateAtleta {}
    public interface UpdateAtleta {}

    public static final String TABLE_NAME = "atleta";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "usuario", length = 100, unique = true)
    private String usuario;

    @Column(name = "senha", length = 60)
    @Nonnull
    private String senha;

    public Atleta(){
    }

    public Atleta(String usuario, String senha, Integer id){
        this.usuario = usuario;
        this.senha = senha;
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
 
    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

}
