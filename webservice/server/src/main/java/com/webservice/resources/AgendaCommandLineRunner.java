package com.webservice.resources;
import com.webservice.models.Agenda;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AgendaCommandLineRunner implements CommandLineRunner {

    private final AgendaRepository repository;

    public AgendaCommandLineRunner(AgendaRepository repository) {
        this.repository = repository;
    }

    // Essa classe tem a função de gerar os dados automaticamente
    @Override
    public void run(String... strings) throws Exception {        
    	
        repository.save(new Agenda("Estudar","Estudar para a prova de redes","1997-06-26", "16:00","1997-06-26","18:00"));
        repository.save(new Agenda("Jogo futebol", "Ir ao jogo de futebol","1997-06-20", "20:00","1997-06-20","22:00"));
        repository.save(new Agenda("Festa", "Ir a festa da minha amiga que vai fazer 20 anos", "1997-06-30","18:00","1997-06-30","22:00"));
        repository.save(new Agenda("Comprar Console", "ir a loja de consoles e escolher entre Xbox One ou Ps4","1997-06-05", "18:00","1997-06-05","20:00"));
        repository.findAll().forEach(System.out::println);
    }
}