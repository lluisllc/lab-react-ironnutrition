// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from "react";
import {Divider, Card, Col, Button} from 'antd';
export default App;


function App() {
  const [foodList, setFoodList] = useState(foods);


  return <div className="App">

<Divider>Food List</Divider>
{foodList.map((food) => (
<div>
  <p>{food.name}</p>
  <img src={food.image} width={200} />
</div>

))}
</div>;
}



