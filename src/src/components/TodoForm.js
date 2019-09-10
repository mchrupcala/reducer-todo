import React, {useState, useReducer} from 'react';
import { initialState, reducer } from '../reducers/reducer';

const TodoForm = () => {
const [newTodo, setNewTodo] = useState();

const [state, dispatch] = useReducer({reducer, initialState})

const changeHandler = event => {
    setNewTodo(event.target.value);
}

    return (
        <div>
            <form>
                <label>Enter To-do:
                    <input
                    type="text"
                    value={newTodo}
                    onChange={changeHandler}
                    >
                    </input>
                </label>

                <button
                type="submit"
                onClick={() => dispatch({ type: "ADD_TODO", payload: {newTodo} }) }
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm;