import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";
import {Row,Divider,Empty} from "antd";
function FoodList(){
    const [foods, setFoods] = useState(foodsJson);
    const handleSearch = (searchTerm) => {
        searchTerm = searchTerm.toLowerCase();
        let filtered = searchTerm.trim() === "" ? foodsJson : foodsJson.filter((food) => food.name.toLowerCase().includes(searchTerm));
        setFoods(filtered);
      };

    const addNewFood = (newFood) => {
 
      const updatedfood = [...foods, newFood];
     
      setFoods(updatedfood);
    };
  
  
      const deleteFood = (id) => {
        console.log("here")
        const updatedFoods = foods.filter((food) => food.id !== id);
        setFoods(updatedFoods);
      };
      return(
        <div>  
         <AddFoodForm addFood={addNewFood}/>
         <SearchBar onSearch={handleSearch} />
         <Divider>Food List</Divider>
         <Row gutter={16}>
        {foods.length > 0 ? (
          foods.map((food, index) => (
            <FoodBox key={index} food={food} onDelete={() => deleteFood(food.id)} />
          ))
        ) : (
          <Empty description="No items found" />
        )}
      </Row>
      {foods.length === 0 && foods.length === 0 && (
        <div style={{ textAlign: "center" }}>
          <Empty description="Oops! There is no more content to show." />
        </div>
      )}
  
       
        
        </div>
     
      )



}
export default FoodList;
