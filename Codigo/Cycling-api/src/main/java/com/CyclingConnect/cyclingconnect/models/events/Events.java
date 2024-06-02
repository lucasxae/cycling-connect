package com.CyclingConnect.cyclingconnect.models.events;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * A classe Events representa uma entidade de evento que será armazenada no banco de dados.
 * Ela contém detalhes como título, descrição, data e dia da semana do evento.
 * 
 * <p>Esta classe usa anotações de JPA para mapear a entidade para uma tabela no banco de dados e anotações de validação
 * para garantir que os campos atendam aos requisitos especificados.
 * 
 * <p>Exemplo de uso:
 * <pre>
 *     Events evento = new Events("Conferência", "Conferência anual de tecnologia", "2024-08-15", "Segunda-feira");
 *     System.out.println(evento.getTitle()); // imprime "Conferência"
 * </pre>
 * 
 * <p>Mapeamento dos campos:
 * <ul>
 *     <li><strong>id</strong>: Identificador único do evento (gerado automaticamente).</li>
 *     <li><strong>title</strong>: Título do evento (mínimo de 3 caracteres).</li>
 *     <li><strong>description</strong>: Descrição do evento (mínimo de 3 caracteres).</li>
 *     <li><strong>date</strong>: Data do evento.</li>
 *     <li><strong>dayOfWeek</strong>: Dia da semana do evento.</li>
 * </ul>
 * 
 * @param title O título do evento. Deve ter no mínimo 3 caracteres.
 * @param description Uma breve descrição do evento. Deve ter no mínimo 3 caracteres.
 * @param date A data do evento no formato "dd/mm/yyyy".
 * @param dayOfWeek O dia da semana em que o evento ocorrerá.
 */

@Entity
@Table(name = "events")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Events {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    @Size(min = 3, message = "Título deve ter no minimo 3 caracteres")
    private String title;

    @Column(name = "location")
    private String location;

    @Column(name = "description")
    @Size(min = 3, message = "Descricão deve ter no minimo 3 caracteres")
    private String description;

    @Column(name = "date")
    private String date;

    @Column(name = "dayOfWeek")
    private String dayOfWeek;

    @Column(name = "hour")
    private String hour;

    @Column(name = "registrationStatus")
    private EventsRegistration registrationStatus;

    @Column(name = "distance")
    private Integer distance;

    @Column(name = "value")
    private Double value;

    public Events(String title, String description, String date, String hour , Integer distance, Double value, String location, String dayOfWeek, EventsRegistration registrationStatus) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.distance = distance;
        this.value = value;
        this.hour = hour;
        this.location = location;
        this.registrationStatus = registrationStatus;
        this.dayOfWeek = dayOfWeek;
    }
}
