package com.example.todomanager.repository;

import com.example.todomanager.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Method to find a user by username
    Optional<User> findByUsername(String username);

    // Method to check if a user with a given username already exists
    boolean existsByUsername(String username);
}
