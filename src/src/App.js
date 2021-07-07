import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import TodoForm from './components/TodoForm'; 
import './App.css';
import TodoList from './components/TodoList';

function App() {

  // dispatch is the method I use to send data over to my reducer.js.
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = item => {
    dispatch({ 
      type: "ADD_TODO", 
      payload: item })
  }



  return (
    <div className="App">
      <TodoList todos={state.dataSet}/>
      <TodoForm 
      addTodo={addTodo}
      />
    </div>
  );
}

export default App;
