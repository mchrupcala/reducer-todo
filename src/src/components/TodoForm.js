import React, {useState, useReducer} from 'react';


const TodoForm = ({addTodo}) => {

    const [todoText, setTodoText] = useState('');



const changeHandler = event => {
    setTodoText(event.target.value);
}

const handleSubmit = event => {
    event.preventDefault();

    // call addTodo, which will send the user's data into my reducer as a new todo item.
    addTodo(todoText);

    //change the input value of my form back to an empty string.
    setTodoText('');
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter To-do:
                    <input
                    type="text"
                    value={todoText}
                    name="newTodo"
                    onChange={changeHandler}
                    >
                        {//^^Set the state value ('todoText') to whatever the user enters. That's where my data starts.
                        }
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