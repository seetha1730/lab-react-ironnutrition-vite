// FoodBox.jsx
import React from 'react';
import { Card, Divider,Col,Button } from "antd";

function FoodBox({food,onDelete}){

    
    return(
    
       <Col className="gutter-row" span={6} style={{ margin: "10px 0"}}>
     <Card className="foodProducts">
     
      <h3>{food.name}</h3>
      <img src={food.image} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.servings * food.calories} kcal</b>
      </p>
      <Button type="primary" onClick={onDelete}>Delete</Button>
      
    
      </Card>
     </Col>

      
   
    )

} 
export default FoodBox;