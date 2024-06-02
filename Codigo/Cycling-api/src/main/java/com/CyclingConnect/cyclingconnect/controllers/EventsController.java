package com.CyclingConnect.cyclingconnect.controllers;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.events.DeleteEventsDTO;
import com.CyclingConnect.cyclingconnect.models.events.Events;
import com.CyclingConnect.cyclingconnect.models.events.EventsDTO;
import com.CyclingConnect.cyclingconnect.repositories.EventsRepository;
import com.CyclingConnect.cyclingconnect.service.ExerciseService;

@RestController
@RequestMapping("/events")
public class EventsController {

    @Autowired
    private ExerciseService exerciseService;

    @Autowired
    private EventsRepository eventsRepository;

    /**
     * Endpoint para criar um novo evento.
     * @param data Dados do evento a ser criado encapsulados em EventsDTO.
     * @return ResponseEntity com status e mensagem de sucesso ou erro.
     */
    @PostMapping("/create")
    public ResponseEntity createEvents(@RequestBody EventsDTO data) {

        if (!exerciseService.verificaFormatoData(data.date())) {
            return ResponseEntity.badRequest().body("Formato da data incorreto");
        }

        String aux = data.date();
        String[] dataSeparada = aux.split("/");

        LocalDate dataCompleta = LocalDate.of(Integer.parseInt(dataSeparada[2]), Integer.parseInt(dataSeparada[1]),
                Integer.parseInt(dataSeparada[0]));
        LocalDate dataAtual = LocalDate.now();

        if (dataCompleta.isBefore(dataAtual)) {
            return ResponseEntity.badRequest().body("Data anterior a data atual");
        }

        DayOfWeek diaDaSemana = dataCompleta.getDayOfWeek();
        String dia = exerciseService.transformandoDia(diaDaSemana);

        Events newEvent = new Events(data.title(), data.description(), data.date(), dia);

        eventsRepository.save(newEvent);
        return ResponseEntity.status(HttpStatus.CREATED).body("Evento criado com sucesso");
    }

    /**
     * Endpoint para listar todos os eventos.
     * @return ResponseEntity com a lista de eventos ou mensagem de erro.
     */
    @GetMapping("/getEvents")
    public ResponseEntity getEvents() {

        if (eventsRepository.findAll().isEmpty()) {
            return ResponseEntity.badRequest().body("Nenhum evento encontrado");
        }

        return ResponseEntity.ok().body(eventsRepository.findAll());

    }

    /**
     * Endpoint para deletar um evento com base no título e data.
     * @param data Dados do evento a ser deletado encapsulados em DeleteEventsDTO.
     * @return ResponseEntity com status e mensagem de sucesso ou erro.
     */
    @DeleteMapping("/delete")
    public ResponseEntity deleteEvents(@RequestBody DeleteEventsDTO data) {

        if (!exerciseService.verificaFormatoData(data.date())) {
            return ResponseEntity.badRequest().body("Formato da data incorreto");
        }

        if (eventsRepository.findByTitle(data.tittle()) == null) {
            return ResponseEntity.badRequest().body("Nenhum evento encontrado");
        }

        List<Events> mesmoTitulo = eventsRepository.findByTitle(data.tittle());

        for (Events event : mesmoTitulo) {
            if (event.getDate().equals(data.date())) {
                eventsRepository.delete(event);
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Evento deletado com sucesso");
            }
        }
        return ResponseEntity.badRequest().body("Não possui o evento" + data.tittle() + "na data" + data.date());
    } 
}
