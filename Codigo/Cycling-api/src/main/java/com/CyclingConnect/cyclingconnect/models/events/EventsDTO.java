package com.CyclingConnect.cyclingconnect.models.events;

/**
 * A classe EventsDTO representa um Objeto de Transferência de Dados (DTO) para um evento.
 * Ela encapsula os detalhes essenciais de um evento, incluindo seu título, descrição e data.
 *
 * <p>Esta classe é um record, introduzido no Java 14, que fornece uma maneira concisa de criar classes que transportam dados.
 * O principal objetivo desta classe é transferir dados entre diferentes partes de uma aplicação.
 * 
 * <p>Exemplo de uso:
 * <pre>
 *     EventsDTO newEvent = new EventsDTO("Conferência", "Conferência anual de tecnologia", "15/08/2024");
 *     eventsRepository.save(newEvent);
 * </pre>
 *
 * @param title O título do evento. Este deve ser um nome curto e descritivo.
 * @param description Uma breve descrição do evento. Esta fornece mais contexto e detalhes sobre o evento.
 * @param date A data do evento no formato "dd/mm/yyyy". Esta especifica quando o evento está programado para ocorrer.
 */
public record EventsDTO(String title, String description, String date, String hour , Integer distance, Double value, String location) {
    
}
