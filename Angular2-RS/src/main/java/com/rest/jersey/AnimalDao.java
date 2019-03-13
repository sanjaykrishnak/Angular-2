package com.rest.jersey;


import java.util.HashMap;
import java.util.Map;

public enum AnimalDao {
	instance;

	public static Map<String, Animal> animals = new HashMap<String, Animal>();
	
	static
	{
		Animal animal = new Animal("1", "Lion", "Wild");
		AnimalDao.animals.put("1", animal);
		animal = new Animal("2", "Crocodile", "Wild");
		animals.put("2", animal);
		
	}

	private AnimalDao() {

	}

	public Map<String, Animal> getAnimals() {
		return animals;
	}

}