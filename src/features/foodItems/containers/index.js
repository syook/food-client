import React from "react";
import FoodItemsForm from "./form";

export default class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw", maxWidth: 400 }}>
        <FoodItemsForm />
      </div>
    );
  }
}
