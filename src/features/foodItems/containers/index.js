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

  componentDidMount(){
      //api call
  }

  render() {
    return (
      <div style={{ marginTop: "80px", width: "90vw" }}>
        {this.state.isAddItem ? (
          <FoodItemsForm toggle={this.toggle} />
        ) : (
          <>
            <FoodItemTable currentData={this.state.data} toggle={this.toggle}/>
          </>
        )}
      </div>
    );
  }
}
