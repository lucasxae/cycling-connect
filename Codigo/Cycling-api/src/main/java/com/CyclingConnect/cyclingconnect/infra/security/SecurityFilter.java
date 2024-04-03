package com.CyclingConnect.cyclingconnect.infra.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.CyclingConnect.cyclingconnect.repositories.UserRepository;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Um filtro para processar requisições de segurança.
 * Este filtro verifica o token de autorização em cada requisição e autentica o usuário correspondente, se o token for válido.
 */
@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    TokenService tokenService;

    @Autowired
    UserRepository userRepository;

     /**
     * Executa o filtro de segurança para cada requisição.
     * Este método verifica o token de autorização na requisição, valida o token e autentica o usuário correspondente.
     * 
     * @param request     O objeto HttpServletRequest que representa a requisição HTTP.
     * @param response    O objeto HttpServletResponse que representa a resposta HTTP.
     * @param filterChain O objeto FilterChain para encadear filtros adicionais.
     * @throws ServletException Se ocorrer uma exceção de servlet.
     * @throws IOException      Se ocorrer uma exceção de entrada/saída.
     */
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var token = this.recoverToken(request);

        if (token != null) {
            var email = tokenService.validateToken(token);
            UserDetails user = userRepository.findByEmail(email);

            var authentication = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request, response);
    }

     /**
     * Recupera o token de autorização da requisição.
     * 
     * @param request O objeto HttpServletRequest que representa a requisição HTTP.
     * @return O token de autorização, ou null se não estiver presente na requisição.
     */
    private String recoverToken(HttpServletRequest request){
        var authHeader = request.getHeader("Authorization");

        if (authHeader == null) return null;

        return authHeader.replace("Bearer ", "");
    }
    
}
