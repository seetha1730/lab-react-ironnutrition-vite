import { useState } from "react";
import {  Input, Button,Col } from "antd";
//example images to add food 
//https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/449771304/healthy-plate-overhead.jpg?quality=82&strip=1&w=1250
 //https://www.eatright.org/-/media/images/eatright-articles/eatright-article-feature-images/servingsizevsportionsizeisthereadifference_600x450.jpg?h=483&w=644&rev=0c6100cd2cff4dbfb84357265d97e051&hash=C50278B8B763E62C73D13205A2011C9C
function AddFoodForm(props) {
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleNameInput = e => setName(e.target.value);
 
  const handleImageInput = e => setimage(e.target.value);
 
  const handleCaloriesInput = e => setCalories(e.target.value);
 
  const handleServingsInput = e => setServings(e.target.value); 
   

  const handleSubmit = ()=> {      
   
    const newFood = { name, image, calories, servings };
 
    console.log("Submitted: ", newFood);

    props.addFood(newFood);

    // Reset the state
    setName("");
    setimage("");
    setCalories("");
    setServings("");
  }

  return (
    <div className="AddFood">
       <h3>Add Food</h3>
      <form>
     
  
      <div>
        <label  htmlFor=" ">name: </label>
        <Input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput} 
        />
        </div>
        
       <div>
        <label htmlFor=" ">Image: </label>
        <Input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput} 
        /></div>
        <div>
        <label htmlFor=" " >Calories: </label>
        <Input 
            type="number" 
            name="calories" 
            value={calories} 
            onChange={handleCaloriesInput} 
        /></div>
        <div>
        <label  htmlFor=" ">Servings: </label>
        <Input 
            type="number" 
            name="servings" 
            value={servings} 
            onChange={handleServingsInput} 
        /></div>
        <Col>
       
        <Button type="submit" onClick={()=>handleSubmit()}>Create food</Button>
      
        </Col>
      </form>
    </div>
  );
  }
 
export default AddFoodForm;