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
     * Transforma um enum DayOfWeek em uma string representando o nome do dia da semana em português.
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
     * Obtém os exercícios da semana atual para um determinado usuário com base no email.
     *
     * @param email O email do usuário para o qual os exercícios serão obtidos.
     * @return List<Exercise> Uma lista contendo os exercícios da semana atual do usuário.
     * @throws IllegalArgumentException Se o usuário com o email fornecido não for encontrado.
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
