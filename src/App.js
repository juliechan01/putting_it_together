import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        lName = {"Chan"}
        fName = {"Julie"}
        age = {24}
        hairColor = {"red"}/>

      <PersonCard 
        lName = {"Fowler"} 
        fName = {"Andrew"}
        age = {30}
        hairColor = {"black"}/>

      <PersonCard
        lName = {"Chan"}
        fName = {"Jason"}
        age = {20}
        hairColor = {"black"}/>

      <PersonCard 
        lName = {"Bui"}
        fName = {"Taylor"}
        age = {21}
        hairColor = {"copper"}/>
    </div>
  );
}

export default App;