package com.CyclingConnect.cyclingconnect.service;

import java.time.DayOfWeek;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

    public String transformandoDia(DayOfWeek data) {

        switch (data) {
            case MONDAY:
                return "Segunda";
            case TUESDAY:
                return "Terça";
            case WEDNESDAY:
                return "Quarta";
            case THURSDAY:
                return "Quinta";
            case FRIDAY:
                return "Sexta";
            case SATURDAY:
                return "Sábado";
            case SUNDAY:
                return "Domingo";
            default:
                return "";
        }

    }

    public boolean verificaFormatoData(String data){
        String regex = "\\d{2}/\\d{2}/\\d{4}";
        return Pattern.matches(regex, data);
    }
}
