import { Card, Col, Button } from 'antd';
import React from 'react';

function FoodBox({food}) {
console.log('PROPS:',food)
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={70} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories * food.servings} </b> kcal
          </p>
          <Button type="primary"> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;