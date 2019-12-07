import React from "react";
import FoodItemsForm from "./form";
import FoodItemTable from "./table";
import { Button } from "semantic-ui-react";

export default class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "sandwich", type: "breakfast" },
        { name: "paratha", type: "breakfast" },
        { name: "sandwich", type: "breakfast" },
        { name: "paratha", type: "breakfast" },
        { name: "sandwich", type: "breakfast" },
        { name: "paratha", type: "breakfast" },
        { name: "sandwich", type: "breakfast" },
        { name: "paratha", type: "breakfast" }
      ],
      isAddItem: false
    };
  }
  toggle = () => {
    this.setState({ isAddItem: !this.state.isAddItem });
  };

  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw", maxWidth: 400 }}>
        {this.state.isAddItem ? (
          <FoodItemsForm toggle={this.toggle} />
        ) : (
          <>
            <Button onClick={this.toggle}>Add Food Item</Button>
            <FoodItemTable currentData={this.state.data} />
          </>
        )}
      </div>
    );
  }
}
