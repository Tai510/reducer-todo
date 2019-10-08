import React, { useReducer } from 'react';
import { reducer, todo } from '../reducers/reducer'
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, todo);

    return (
        <div>
           <TodoForm dispatch={dispatch} />
           {state.map(todo => {
               return <Todo key={todo.id} todo={todo} />
           })}
        </div>
    )
}

export default TodoList;