import React, {useState, useReducer } from 'react';
import { reducer, todo } from '../reducers/reducer';
import TodoList from './TodoList';

const TodoForm = ({ dispatch }) => {
    const [item, setItem] = useState('');


const handleChanges = e => {
    setItem(e.target.value)
}

const submitForm = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: item
    });
    setItem("");
  };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input name='item'  value={item} onChange={handleChanges}></input>
                <button>ADD</button>
                <button>CLEAR</button>
            </form>
        </div>
    )
};

export default TodoForm;