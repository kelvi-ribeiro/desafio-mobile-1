package com.webservice.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Agenda {

    @Id
    @GeneratedValue
    private Long id;
    
    
    
    
    private String dataInicio;
    
   private String dataFim;
   
   private String descricao;
   
   private String nome;
   
   private String horaInicio;
   
   private String horaFim;
   
   
    
    public String getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(String dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Agenda() {
    	
    }
    
    public Agenda(String nome ,String descricao, String dataInicio, 
    			  String horaInicio,  String dataFim, String horaFim ) {
    	this.nome = nome ;
    	this.descricao = descricao;
    	this.dataInicio = dataInicio;
    	this.horaInicio = horaInicio;
    	this.horaFim = horaFim;
    	this.dataFim = dataFim;
    	
    	
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
	

	public String getDataFim() {
		return dataFim;
	}

	public void setDataFim(String dataFim) {
		this.dataFim = dataFim;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}

	public String getHoraFim() {
		return horaFim;
	}

	public void setHoraFim(String horaFim) {
		this.horaFim = horaFim;
	}

	@Override
	public String toString() {
		return "Agenda [id=" + id + ", dataInicio=" + dataInicio + ", dataFim=" + dataFim + ", descricao=" + descricao
				+ ", nome=" + nome + ", horaInicio=" + horaInicio + ", horaFim=" + horaFim + "]";
	}

	
	

	
}

    

    