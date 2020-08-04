import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl , InputLabel , Input} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
//import firebase from './firebase';
import firebase from 'firebase';



function App() {

  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');



// when the app loads we need to listen to the database and fetch new todos as they gwet added or removed

useEffect(() => {

  //this code here fires when app.js loads
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
    console.log(doc => doc.data().todo)
    setTodos(snapshot.docs.map(doc => ({id: doc.id,todo: doc.data().todo})))
  })
 
}, []);

  console.log('🔥 🔥 🔥' , input);

  const addTodo = (event) => {
    //this will fire off when we click the button which is add to do
    event.preventDefault(); //this prevents the page from refreshing

    
    db.collection('todos').add({
      todo: input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    
    })
//firebase.firestore.FieldValue.serverTimestamp()
  //  console.log('🐒🐒🐒🐒' , 'Im working!!!!');
   // setTodos([...todos , input]);
    setInput('');//clear the input

  }

  return (
    <div className="App">
     <h1>Hello Mac the programmer  </h1>

<form>

    {/* <input  value={input} onChange={event => setInput(event.target.value)}  /> */}

    
    <FormControl>
      <InputLabel>✍✍  Todo App</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
    </FormControl>

    <Button disabled={!input} variant="contained" onClick={addTodo} color="primary">
    Add Todo
    </Button>

     {/* <button onClick={addTodo}>Add Todo</button> */}

</form>



     
     <ul>
       {todos.map(todo => (
         <Todo todo={todo} />
       //  <li>{todo}</li>
       ))}
      
     </ul>
    </div>
  );
}

export default App;

