// src/App.js
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Divider } from 'antd';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList)
  return <div className="App">

    <h1>Food List</h1>
    {foodList.map((food,index) => {
      return (<FoodBox className="box"  key={index} food={food} />);
    })
    }
  </div>
}

export default App;



