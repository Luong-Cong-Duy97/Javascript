import logo from './logo.svg';
import './App.css';
import React, { useState}  from 'react';


const movie = {
  name:'Star War',
  genre:['fiction', 'action'],
  description:'This is movie about space war....',
  actor:['luke skywalker','obiwan kenobi', 'dark vader'],
  price:100000,
  duration: 100,
  score: 8,
  releaseYear: 1977,
  viewCount:420000,
}
function App() {
const [arrayState, setArray] = useState(movie);
const [packageState, setPackage ] = useState(movie);
  const addArray = () => {
    const newArray = arrayState.slice()
    newArray.unshift('Jane')
    setArray(newArray)

    const newOject = Object.assign({}, packageState)
    newOject.actor.push('Jane')
    setPackage(newOject)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>{'Name: ' + packageState.name}</div>
        <div>{'Genre: ' + packageState.genre}</div>
        <div>{'Description: ' + packageState.description}</div>
        <div>{'Actor: '}</div>
        {
          packageState.actor.map((item,index,array) => {
            return (
              <div>{item}</div>
            )
          }
          
          )
        }

        <div>{'Price: ' + packageState.price}</div>
        <div>{'duration: ' + packageState.duration}</div>
        <div>{'score: ' + packageState.score}</div>
        <div>{'releaseYear: ' + packageState.releaseYear}</div>
        <div>{'viewCount: ' + packageState.viewCount}</div>
        <button onClick ={addArray}>{'Add'}</button>
      </header>
    </div>
  );
}

export default App;
