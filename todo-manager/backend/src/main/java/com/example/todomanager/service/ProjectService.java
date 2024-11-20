package com.example.todomanager.service;

import com.example.todomanager.model.Project;
import com.example.todomanager.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    // Create a new project
    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    // Get all projects
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    // Update a project
    public Project updateProject(Project project) {
        return projectRepository.save(project);
    }

    // Delete a project
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
