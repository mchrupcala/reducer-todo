import React from 'react';
import { initialState } from '../reducers/reducer';
import NewTodo from './NewTodo'
import TodoForm from './TodoForm';

const TodoList = () => {
// const [todoState, setTodoState] = useState([]);

//Keep track of my state here (with useReduce).
    //Then, map through all my todo's stored in state.

    const todos = initialState;
    console.log(todos);

        return (
           <div>
                {todos.map(item => {
                  return (
                    <NewTodo />
                  )
                })} 
                    <TodoForm /> 
            </div>
        )
}

export default TodoList;