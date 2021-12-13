package com.domain.Persona;

import java.io.Serializable;
import javax.persistence.*;

@Entity
@Table(name = "persona")
public class Persona implements Serializable
{
    private static final long serialVersionUID = 1l;
    
    @Column(name="id_persona")
    @Id
    private int idPersona;
    
    private String nombre;
    private String apellido;
    private String email;
    private String telefono;
    
    public Persona(){}
    
    public int getIdPersona()
    {
        return idPersona;
    }
    
    public String getNombre()
    {
        return nombre;
    }
    
    public String getApellido()
    {
        return apellido;
    }
    
    public String getEmail()
    {
        return email;
    }
    
    public String getTelefono()
    {
        return telefono;
    }
    
    public void setIdPersona(int idPersona)
    {
        this.idPersona = idPersona;
    }
    
    public void setNombre(String nombre)
    {
        this.nombre = nombre;
    }
    
    public void setApellido(String apellido)
    {
        this.apellido = apellido;
    }
    
    public void setEmail(String email)
    {
        this.email = email;
    }
    
    public void setTelefono(String telefono)
    {
        this.telefono = telefono;
    }
    
    public String toString()
    {
        return "Persona:\n\n" + "idPersona: " + idPersona + "\nNombre: " + nombre + "\nApellido: " + apellido
                + "\nEmail: " + email + "\nTelefono: " + telefono;
    }
}