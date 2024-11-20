package com.example.todomanager.model;

import jakarta.persistence.*;
import java.sql.Timestamp;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id") // Ensuring 'project_id' is used in the entity
    private Long projectId;

    @Column(nullable = false)
    private String title;

    private Timestamp createdDate;
    // Getters and Setters

    public Long getProjectId() {
        return projectId;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public Project(String title, Timestamp createdDate) {
        this.title = title;
        this.createdDate = createdDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

}
