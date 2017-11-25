package com.webservice.resources;

import java.util.Collection;



import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;
import com.webservice.models.Agenda;




@RestController
public class AgendaController {
    private AgendaRepository repository;

    public AgendaController(AgendaRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/minhas-agendas")
    @CrossOrigin(origins = {"http://localhost:8100","file://"})
    public Collection<Agenda> Agendas() {

        return repository.findAll();
                
                
    }
    
   
	 
    
    
    
    
}