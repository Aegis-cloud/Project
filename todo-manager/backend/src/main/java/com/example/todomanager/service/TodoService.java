package com.example.todomanager.service;

import com.example.todomanager.model.Todo;
import com.example.todomanager.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private ProjectService projectService;

    // Create a new todo
    public Todo createTodo(Long projectId, Todo todo) {
        todo.setProject(projectService.getProjectById(projectId).orElseThrow());
        return todoRepository.save(todo);
    }

    // Get all todos by project ID
    public List<Todo> getTodosByProjectId(Long projectId) {
        return todoRepository.findByProject_ProjectId(projectId);
    }

    // Update a todo
    public Todo updateTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    // Delete a todo
    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    // Update the completion status of a todo
    public Todo updateTodoStatus(Long id, boolean completed) {
        Todo todo = todoRepository.findById(id).orElseThrow();
        todo.setStatus(completed ? "Completed" : "Pending");
        return todoRepository.save(todo);
    }
}
