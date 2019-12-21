import React,{useState} from "react";
import { Form, Button } from "semantic-ui-react";

function FoodItemsForm(props) {
  
  const options= [
        { text: "Breakfast", value: "breakfast" },
        { text: "Lunch", value: "lunch" }
      ]
  const [name,setName] = useState('')
  const [foodType,setFoodType] = useState('breakfast')
  const handleSubmit = e => {
    e.preventDefault();
    if(!name){
      console.log(name,foodType)
    }
    
    setName('')  
  };
  return (
      <div>
        <Form>
          <Form.Field>
            <Form.Dropdown
              fluid
              defaultValue={'breakfast'}
              placeholder="Rice"
              options={options}
              onChange={(e, { value }) => setFoodType(value)}
            />
          </Form.Field>
          <Form.Field>
            <label> Name</label>
            <input
              placeholder="Item Name"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </Form.Field>
          <Button onClick={props.toggle}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  
}

export default FoodItemsForm;
