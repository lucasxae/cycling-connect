package com.CyclingConnect.cyclingconnect.models.feedback;

/*
 * DTO que representa o feedback de um usuário.
 
    * @param id Identificador do feedback.
    * @param nome Nome do usuário que recebeu o feedback.
    * @param nota Nota atribuída ao usuário.
    * @param disponibilidadeFutura Disponibilidade futura do usuário.
    * @param statusFeedback Status do feedback.
    * @param details Detalhes do feedback.
    * @param email Email do usuário que recebeu o feedback.
 */
public record FeedbackDTO(int id, String nome, int nota, String disponibilidadeFutura, String statusFeedback,
        String details, String email) {

}

/*
 * [
 * {
 * "id": 1,
 * "nome": "Ciclista Exemplo",
 * "nota": 5,
 * "disponibilidadeFutura": "2 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 2,
 * "nome": "Ciclista Exemplo",
 * "nota": 2,
 * "disponibilidadeFutura": "3 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 3,
 * "nome": "Ciclista Exemplo",
 * "nota": 4,
 * "disponibilidadeFutura": "2 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 4,
 * "nome": "Ciclista Exemplo",
 * "nota": 4,
 * "disponibilidadeFutura": "5 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 5,
 * "nome": "Ciclista Exemplo",
 * "nota": 1,
 * "disponibilidadeFutura": "3 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 * },
 * {
 * "id": 6,
 * "nome": "Ciclista Exemplo",
 * "nota": 3,
 * "disponibilidadeFutura": "7 dias na semana",
 * "statusFeedback": "Aprovado",
 * "details":
 * "O ciclista mostrou grande melhoria em sua resistência e velocidade. A técnica de pedalada melhorou significativamente e a habilidade de manter um ritmo constante durante longos períodos foi impressionante. No entanto, a habilidade de subir colinas ainda precisa de algum trabalho. No geral, um ótimo progresso!"
 *   }
 * ]
 * 
 * 
 * 
 * 
 */