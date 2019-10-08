import React from 'react';

const Todo = ({ todo, dispatch }) => {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    }

    return (
        <div>

        </div>
    )
}

export default Todo;