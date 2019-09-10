import React, {useState, useReducer} from 'react';


const TodoForm = (props) => {
const [newTodo, setNewTodo] = useState();
//Since I moved my Reducer to App...should this useState hook move there too?


// const [state, dispatch] = useReducer({reducer, initialState})

const changeHandler = event => {
    setNewTodo(event.target.value);
}

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Enter To-do:
                    <input
                    type="text"
                    value={newTodo}
                    name="newTodo"
                    onChange={changeHandler}
                    >
                    </input>
                </label>

                <button
                type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm;