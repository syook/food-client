import React from "react";
import { Icon,Button } from "semantic-ui-react";

const FoodItemTable = props => {
  const userDetails = [
    {
      name: "Shyam",
      email: "shyam@syook.com",
      phone: 9876543210,
      defaultChapati: 2
    },
    {
      name: "Ram",
      email: "ram@syook.com",
      phone: 9876543210,
      defaultChapati: 2
    }
  ];
  return (
    <div>
      <div className="full-width formSection">
        <div className="flex-start full-width pt-20 info">
          <label>
            <Icon name="calendar alternate outline" size="med" />:{" "}
            <Button onClick={props.toggle}>click</Button>
            <span>07/12/2019</span>
          </label>
        </div>
      </div>
    </div>
  );
};
export default FoodItemTable;
