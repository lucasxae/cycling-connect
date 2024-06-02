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
 * Ela contém detalhes como título, descrição, localização, data, hora, dia da semana, status de registro,
 * distância e valor do evento.
 * 
 * <p>Esta classe usa anotações JPA para mapear a entidade para uma tabela no banco de dados e anotações de validação
 * para garantir que os campos atendam aos requisitos especificados.
 * 
 * <p>Mapeamento dos campos:
 * <ul>
 *     <li><strong>id</strong>: Identificador único do evento (gerado automaticamente).</li>
 *     <li><strong>title</strong>: Título do evento (mínimo de 3 caracteres).</li>
 *     <li><strong>location</strong>: Localização do evento.</li>
 *     <li><strong>description</strong>: Descrição do evento (mínimo de 3 caracteres).</li>
 *     <li><strong>date</strong>: Data do evento no formato "dd/mm/yyyy".</li>
 *     <li><strong>hour</strong>: Hora do evento no formato "hh:mm".</li>
 *     <li><strong>dayOfWeek</strong>: Dia da semana do evento.</li>
 *     <li><strong>registrationStatus</strong>: Status de registro do evento (por exemplo, ABERTO, FECHADO).</li>
 *     <li><strong>distance</strong>: Distância do evento (em quilômetros).</li>
 *     <li><strong>value</strong>: Valor do evento (em reais).</li>
 * </ul>
 * 
 * @param title O título do evento. Deve ter no mínimo 3 caracteres.
 * @param description Uma breve descrição do evento. Deve ter no mínimo 3 caracteres.
 * @param date A data do evento no formato "dd/mm/yyyy".
 * @param hour A hora do evento no formato "hh:mm".
 * @param distance A distância do evento em quilômetros.
 * @param value O valor do evento em reais.
 * @param location A localização do evento.
 * @param dayOfWeek O dia da semana em que o evento ocorrerá.
 * @param registrationStatus O status de registro do evento.
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
