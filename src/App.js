import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let personName = ['Asad','Robin','Abrity', 'Saima','Shammi'];
  let personAge = ['23','27','20', '19','22'];
  let personGender = ['male','male','female', 'female','female'];

  let products = [
    {name:"Photoshop", price: "105$"},
    {name:"Illastator", price: '88$'},
    {name: "Pdf Reader", price: '8.9$'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <h3>Product List</h3>
          {
            products.map(product => <li>{product.name} {product.price}</li>)
          }
        </ul>




        <Person name={personName[0]} age={personAge[0]} gender={personGender[0]}></Person>
        <Person name={personName[1]} age={personAge[1]} gender={personGender[1]}></Person>
        <Person name={personName[2]} age={personAge[2]} gender={personGender[1]}></Person>
        <Person name={personName[3]} age={personAge[3]} gender={personGender[1]}></Person>
        <Person name={personName[4]} age={personAge[4]} gender={personGender[1]}></Person>




        <Counter></Counter>
      </header>
    </div>
  );
}


function Person(props)
{
  let personStyle = {
    border: '2px solid red',
    backgroundColor: '#fff',
    color: '#000',
    padding: '20px',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Gender: {props.gender}</h3>
    </div>
  )
}

// component state hook and state method
function Counter(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default App;
