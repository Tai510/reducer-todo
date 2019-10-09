import React, {useState} from 'react';


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
    setItem('');
  };

const clearCompleted = e => {
    e.preventDefault();
    dispatch({
        type: 'CLEAR_COMPLETED'
    });
}

    return (
        <div>
            <form autocomplete="off" className='TodoForm' onSubmit={submitForm}>
                <div className='todo-input'>
                    <input name='item'  value={item} onChange={handleChanges}></input>
                </div>
                <div className='todo-buttons'>
                    <button>Add</button>
                    <button onClick={clearCompleted}>Clear</button>
                </div>
            </form> {/* TodoForm end */}
        </div>
    )
};

export default TodoForm;