package com.example.todomanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.example.todomanager.repository")
@EntityScan(basePackages = "com.example.todomanager.model")
public class TodoManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoManagerApplication.class, args);
	}

}
