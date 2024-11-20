package com.example.todomanager.config;

import com.example.todomanager.model.User;
import com.example.todomanager.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataInitializer(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Using Optional to find the admin user
        User admin = userRepository.findByUsername("admin").orElse(null);

        if (admin == null) {
            // If no admin user is found, create a new one
            admin = new User();
            admin.setUsername("admin");
            admin.setPassword("admin123"); // This should be encoded in a real app
            admin.setRole("ADMIN"); // Set role as ADMIN

            userRepository.save(admin); // Save the admin user to the database
        }
    }
}
