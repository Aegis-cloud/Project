package com.example.todomanager.controller;

import com.example.todomanager.model.Project;
import com.example.todomanager.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    // public Project createProject(@RequestBody Project project) {
    public ResponseEntity<String> createProject(@RequestBody Project project) {
        Project createdProject = projectService.createProject(project);
        if (createdProject != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Record created successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists." + createdProject);
        }
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Optional<Project> getProjectById(@PathVariable("id") Long id) {
        return projectService.getProjectById(id);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable("id") Long id, @RequestBody Project project) {
        // Set the ID correctly
        project.setProjectId(id); // Use setProjectId instead of setId
        return projectService.updateProject(project);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable("id") Long id) {
        projectService.deleteProject(id);
    }
}
