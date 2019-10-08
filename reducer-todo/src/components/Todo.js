import React from 'react';


const Todo = ({todo, dispatch }) => {
    const toggleCompleted = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    };

    return (
        <div className={`list ${todo.completed}`} onClick={()=> toggleCompleted(todo.id)}>
        <p>{todo.item}</p>
        </div>
    )
}

export default Todo;