import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm'; 
import './App.css';
import TodoList from './components/TodoList';

function App() {

  const [state, dispatch] = useReducer({reducer, initialState})

  // const addTodo = (item) => {
  //   dispatch({ 
  //     type: "ADD_TODO", 
  //     payload: item })
  // }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ 
      type: "ADD_TODO", 
      payload: e })
  }


  return (
    <div className="App">
      <TodoList />
      <TodoForm 
      // addTodo={addTodo} 
      handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
