package com.CyclingConnect.cyclingconnect.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.models.exercise.Exercise;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

@Service
public class ExerciseService {

    @Autowired
    private UserRepository userRepository;

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    /**
     * Transforma um enum DayOfWeek em uma string representando o nome do dia da
     * semana em português.
     *
     * @param data O enum DayOfWeek representando o dia da semana.
     * @return String O nome do dia da semana em português.
     */
    public String transformandoDia(DayOfWeek data) {

        switch (data) {
            case MONDAY:
                return "Segunda-feira";
            case TUESDAY:
                return "Terça-feira";
            case WEDNESDAY:
                return "Quarta-feira";
            case THURSDAY:
                return "Quinta-feira";
            case FRIDAY:
                return "Sexta-feira";
            case SATURDAY:
                return "Sábado";
            case SUNDAY:
                return "Domingo";
            default:
                return "";
        }

    }

    /**
     * Verifica se a data fornecida já passou em relação à data atual.
     * 
     * @param data A data no formato "dd/MM/yyyy" a ser verificada.
     * @return true se a data fornecida já passou, caso contrário false.
     */
    public boolean verificaDataJaPassou(String data) {
        LocalDate dataAtual = LocalDate.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate dataFornecida = LocalDate.parse(data, formatter);

        return dataFornecida.isBefore(dataAtual);
    }

    /**
     * Verifica se a hora fornecida está no formato correto "HH:mm".
     * 
     * @param hora A hora a ser verificada.
     * @return true se a hora estiver no formato correto, caso contrário false.
     */
    public boolean verificandoFormatoHora(String hora) {

        String regex = "\\d{2}:\\d{2}";
        return Pattern.matches(regex, hora);
    }

    /**
     * Verifica se a hora fornecida é válida, considerando os limites de horas e
     * minutos.
     * 
     * @param hora A hora no formato "HH:mm" a ser verificada.
     * @return true se a hora fornecida for válida, caso contrário false.
     */
    public boolean verificarHoraValida(String hora) {
        if (!hora.matches("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")) {
            return false;
        }

        String[] partes = hora.split(":");
        int horas = Integer.parseInt(partes[0]);
        int minutos = Integer.parseInt(partes[1]);

        if (horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
            return false;
        }

        if (horas == 23 && minutos == 59) {
            return true;
        } else if (horas == 0 && minutos == 0) {
            return true;
        }

        return true;
    }

    /**
     * Verifica se a string de data possui o formato correto (dd/mm/aaaa).
     *
     * @param data A string representando a data a ser verificada.
     * @return boolean True se o formato for válido, False caso contrário.
     */
    public boolean verificaFormatoData(String data) {
        String regex = "\\d{2}/\\d{2}/\\d{4}";
        return Pattern.matches(regex, data);
    }

    /**
     * Obtém os exercícios da semana atual para um determinado usuário com base no
     * email.
     *
     * @param email O email do usuário para o qual os exercícios serão obtidos.
     * @return List<Exercise> Uma lista contendo os exercícios da semana atual do
     *         usuário.
     * @throws IllegalArgumentException Se o usuário com o email fornecido não for
     *                                  encontrado.
     */
    public List<Exercise> getExercisesForCurrentWeekByUserEmail(String email) {
        User user = userRepository.findByEmailAsync(email);
        if (user == null) {
            throw new IllegalArgumentException("Usuário com email " + email + " não encontrado");
        }

        LocalDate today = LocalDate.now();
        LocalDate startOfWeek = today.with(TemporalAdjusters.previousOrSame(DayOfWeek.SUNDAY));
        LocalDate endOfWeek = today.with(TemporalAdjusters.nextOrSame(DayOfWeek.SATURDAY));

        List<Exercise> exercises = user.getExercises();

        List<Exercise> exercisesForWeek = exercises.stream()
                .filter(exercise -> {
                    LocalDate exerciseDate = LocalDate.parse(exercise.getDate(), DATE_FORMATTER);
                    return !exerciseDate.isBefore(startOfWeek) && !exerciseDate.isAfter(endOfWeek);
                })
                .sorted((e1, e2) -> {
                    LocalDate date1 = LocalDate.parse(e1.getDate(), DATE_FORMATTER);
                    LocalDate date2 = LocalDate.parse(e2.getDate(), DATE_FORMATTER);
                    return date1.compareTo(date2);
                })
                .collect(Collectors.toList());

        return exercisesForWeek;
    }
}
