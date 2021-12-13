package test;

import com.domain.Persona.Persona;
import java.util.List;
import javax.persistence.*;

public class HolaMundoHibernate 
{
    public static void main(String[] args)
    {
        String hql = "SELECT p FROM Persona p";
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("HibernateEjemplo1");
        
        EntityManager em = emf.createEntityManager();
        Query query = em.createQuery(hql);
        List<Persona> personas = query.getResultList();
        
        for(Persona p: personas)
        {
            System.out.println(p);
        }
    }
}