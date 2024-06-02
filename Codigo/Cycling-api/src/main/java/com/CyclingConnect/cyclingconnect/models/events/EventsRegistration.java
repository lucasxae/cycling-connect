package com.CyclingConnect.cyclingconnect.models.events;

/**
 * A enumeração EventsRegistration representa os diferentes status de registro para um evento.
 * 
 * <p>Os status possíveis são:
 * <ul>
 *     <li><strong>ABERTAS</strong>: Indica que as inscrições para o evento estão abertas.</li>
 *     <li><strong>FECHADA</strong>: Indica que as inscrições para o evento estão fechadas.</li>
 * </ul>
 * 
 * <p>Exemplo de uso:
 * <pre>
 *     EventsRegistration status = EventsRegistration.ABERTAS;
 *     System.out.println(status.getStatus()); // imprime "ABERTAS"
 * </pre>
 * 
 * @param status O status de registro do evento.
 */
public enum EventsRegistration {

    ABERTAS("ABERTAS"),
    FECHADA("FECHADAS");

    private String status;

    private EventsRegistration(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {  
        this.status = status;
    }
    
}