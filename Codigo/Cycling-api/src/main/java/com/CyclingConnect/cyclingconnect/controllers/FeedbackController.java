package com.CyclingConnect.cyclingconnect.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.CyclingConnect.cyclingconnect.models.User;
import com.CyclingConnect.cyclingconnect.models.feedback.Feedback;
import com.CyclingConnect.cyclingconnect.models.feedback.FeedbackDTO;
import com.CyclingConnect.cyclingconnect.repositories.FeedbackRepository;
import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 * Controlador responsável por gerenciar as operações relacionadas ao feedback.
 */
@RestController
@RequestMapping("/feedback")
public class FeedbackController {
    
    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    /**
     * Cria um novo feedback para um usuário existente.
     *
     * @param data Dados do feedback encapsulados em um FeedbackDTO.
     * @return ResponseEntity contendo uma mensagem de sucesso ou erro.
     */
    @PostMapping("create")
    public ResponseEntity createFeedback(@RequestBody @Valid FeedbackDTO data) {

        if (userRepository.findByEmail(data.email()) == null) {
            return ResponseEntity.badRequest().body("Usuário não encontrado");
        }
        Feedback newFeedback = new Feedback(data.weeklyFeedback(), data.nextWeekAvailability(), data.nextWeekSuggestions());
        feedbackRepository.save(newFeedback);

        userRepository.findByEmailAsync(data.email()).setFeedback(newFeedback);
        userRepository.save(userRepository.findByEmailAsync(data.email()));
        return ResponseEntity.ok().body("Feedback criado com sucesso");
    }

}
