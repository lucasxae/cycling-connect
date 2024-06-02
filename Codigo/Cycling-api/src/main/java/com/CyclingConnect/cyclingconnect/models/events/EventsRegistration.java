package com.CyclingConnect.cyclingconnect.models.events;

/**
 * EventsRegistration
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