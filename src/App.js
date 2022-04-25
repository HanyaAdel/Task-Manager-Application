import { useState , useEffect} from 'react';
import './App.css';

import Form from './components/Form';

import List from './components/List';

function App() {

  //States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState ([]);
  const [status, setStatus] = useState ('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  
 
  const filterHandler =() =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () =>{
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else{
      let localTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos);
    }
  }


  // use effect

  useEffect ( () => {     // runs once when the browser is refreshed
    getLocalTodos()
  },[]);

  useEffect( () =>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]); 
  /*we need to change filtered todos whenevever:
  1. a new todo is added or the todo's status changes (todos)
  2. when the select box value changes (status)
  */
  
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        
      </header>
      
      <Form 
        todos = {todos} 
        setInputText={setInputText} 
        inputText = {inputText} 
        setTodos = {setTodos}
        setStatus = {setStatus}
      />
      <List 
      todos = {todos}
      setTodos = {setTodos}
      filteredTodos = {filteredTodos}
      />
    </div>
  );
}

export default App;
