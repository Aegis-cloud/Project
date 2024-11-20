package com.example.todomanager.controller;

import com.example.todomanager.model.Todo;
import com.example.todomanager.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    // Create a new todo
    @PostMapping("/project/{projectId}")
    public ResponseEntity<Todo> createTodo(@PathVariable Long projectId, @RequestBody Todo todo) {
        Todo createdTodo = todoService.createTodo(projectId, todo);
        return ResponseEntity.ok(createdTodo);
    }

    // Get all todos by project ID
    @GetMapping("/project/{projectId}")
    public ResponseEntity<List<Todo>> getTodosByProjectId(@PathVariable Long projectId) {
        List<Todo> todos = todoService.getTodosByProjectId(projectId);
        return ResponseEntity.ok(todos);
    }

    // Update a todo
    @PutMapping("/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable Long id, @RequestBody Todo todo) {
        todo.setId(id);
        Todo updatedTodo = todoService.updateTodo(todo);
        return ResponseEntity.ok(updatedTodo);
    }

    // Delete a todo
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.deleteTodo(id);
        return ResponseEntity.noContent().build();
    }

    // Mark a todo as completed or pending
    @PatchMapping("/{id}/status")
    public ResponseEntity<Todo> updateTodoStatus(@PathVariable Long id, @RequestParam boolean completed) {
        Todo updatedTodo = todoService.updateTodoStatus(id, completed);
        return ResponseEntity.ok(updatedTodo);
    }
}
