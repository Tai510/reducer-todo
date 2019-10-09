import React from 'react';


const Todo = ({todo, dispatch }) => {
    const lineThrough = () => {
        dispatch({
            type: 'TOGGLE_COMPLETED',
            payload: todo.id
        });
    };

    return (
        <div className={`list ${todo.completed}`} onClick={()=> lineThrough()}>
        <p>{todo.item}</p>
        </div>
    )
}

export default Todo;