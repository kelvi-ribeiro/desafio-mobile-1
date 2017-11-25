package com.webservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.webservice.models.Agenda;

@RepositoryRestResource
@CrossOrigin(origins = {"http://localhost:8100","file://"})
interface AgendaRepository extends JpaRepository<Agenda, Long> {
}