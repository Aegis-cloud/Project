package com.example.todomanager.controller;

import com.example.todomanager.model.User;
import com.example.todomanager.service.UserService;
import com.example.todomanager.repository.UserRepository;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api") // Base URL is /api
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    // Constructor injection for UserService and UserRepository
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    // Endpoint to create a new user
    @PostMapping("/register")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(user);
        if (createdUser != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Record created successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists." + createdUser);
        }
    }

    // Endpoint to handle login
    @PostMapping("/auth/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        Optional<User> existingUserOptional = userRepository.findByUsername(user.getUsername());

        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();

            // Check password match
            if (existingUser.getPassword().equals(user.getPassword())) {
                return ResponseEntity.ok("Login successful!");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials.");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found.");
        }
    }

    // Endpoint to fetch a user by username
    @GetMapping("/users/{username}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> getUser(@PathVariable String username) {
        System.out.println("Received Fetch user: " + username);
        User user = userService.findByUsername(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
