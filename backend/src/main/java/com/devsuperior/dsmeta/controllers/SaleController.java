package com.devsuperior.dsmeta.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.services.SaleService;


//RequestMapping é a rota da consulta

@RestController
@RequestMapping(value = "/sales")
public class SaleController {
	//Controller que manipula os dados pelo services
	@Autowired
	private SaleService service;
	
	//Get Mapping metodo GET
	//Pagable retorna em dados paginados
	@GetMapping
	public Page<Sale> findSales(
			//Request Param é o parametro de requisição
			@RequestParam(value="minDate", defaultValue="") String minDate, 
			@RequestParam(value="maxDate", defaultValue="") String maxDate, 
			Pageable pageable
			){
		return service.findSales(minDate, maxDate, pageable);
	}
}
