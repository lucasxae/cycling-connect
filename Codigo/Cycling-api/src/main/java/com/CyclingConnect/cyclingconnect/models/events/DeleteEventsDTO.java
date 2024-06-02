package com.CyclingConnect.cyclingconnect.models.events;

/**
 * A classe DeleteEventsDTO representa um Objeto de Transferência de Dados (DTO) para a operação de exclusão de um evento.
 * Ela encapsula os detalhes essenciais necessários para identificar e excluir um evento, incluindo seu título e data.
 *
 * @param tittle O título do evento a ser excluído. Este deve ser um nome curto e descritivo.
 * @param date A data do evento a ser excluído no formato "yyyy-MM-dd". Esta especifica quando o evento estava programado para ocorrer.
 */

public record DeleteEventsDTO(String tittle, String date) {
    
}
