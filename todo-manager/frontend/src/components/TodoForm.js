import React, { useState, useEffect } from 'react';

const TodoForm = ({ projectId, todoId, onTodoAdded }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (todoId) {
            // Fetch existing todo if editing
            fetch(`/api/todos/${todoId}`)
                .then((response) => response.json())
                .then((todo) => {
                    setTitle(todo.title);
                    setCompleted(todo.completed);
                })
                .catch((err) => setError('Failed to load todo.'));
        }
    }, [todoId]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const todo = { title, completed, projectId };

        const requestOptions = {
            method: todoId ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(todo),
        };

        fetch(todoId ? `/api/todos/${todoId}` : '/api/todos', requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to save todo.');
                }
                return response.json();
            })
            .then((newTodo) => {
                onTodoAdded(newTodo); // Notify parent component
            })
            .catch((err) => setError(err.message));
    };

    return (
        <div>
            <h2>{todoId ? 'Edit Todo' : 'Create Todo'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>
                        Completed:
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={(e) => setCompleted(e.target.checked)}
                        />
                    </label>
                </div>
                <button type="submit">{todoId ? 'Save' : 'Create'}</button>
            </form>
        </div>
    );
};

export default TodoForm;
