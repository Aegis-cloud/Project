import React, { useState, useEffect } from 'react';

const TodoList = ({ projectId }) => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`/api/projects/${projectId}/todos`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((err) => setError('Failed to load todos.'));
    }, [projectId]);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    if (todos.length === 0) {
        return <p>No todos found for this project.</p>;
    }

    return (
        <div>
            <h3>Todo List</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.title}</strong>: {todo.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
