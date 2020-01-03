import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const CREATE_FOOD_ITEM_MUTATION = gql`
	mutation createFoodItemMutation($name: String!, $type: String!) {
		createFoodItem(name: $name, type: $type) {
			_id
			name
			type
		}
	}
`;

const UPDATE_FOOD_ITEM_MUTATION = gql`
	mutation updateFoodItemMutation($id: String!, $name: String!, $type: String!) {
		updateFoodItem(id: $id, name: $name, type: $type) {
			_id
			name
			type
		}
	}
`;

function FoodItemsForm(props) {

	const options = [
		{ text: "Breakfast", value: "breakfast" },
		{ text: "Lunch", value: "lunch" }
	]
	const [name, setName] = useState('')
	const [type, setFoodType] = useState('breakfast')
	const handleSubmit = (set) => {
		if (!name) {
			window.alert('add something')
		}
		else {

			setName('')
		}


	};
	useEffect(() => {
		if (!!props.foodItem) {
			setName(props.foodItem.name)
			setFoodType(props.foodItem.type)
		}
	}, [props.foodItem])

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
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Field>
				<Button onClick={props.toggle}>Cancel</Button>
				{!!props.foodItem ? (
					<Mutation
						mutation={UPDATE_FOOD_ITEM_MUTATION}
						variables={{ id: props.foodItem._id, name, type: type }}
						onCompleted={props.toggle}
						update={(store, { data: { updateFoodItem } }) =>
							props.updateFoodItem(store, updateFoodItem)
						}
					>
						{createFoodItemMutation => (
							<Button type="submit" onClick={() => {
								handleSubmit()
								createFoodItemMutation()
							}}>
								Update
								</Button>
						)}
					</Mutation>
				) : (
						<Mutation
							mutation={CREATE_FOOD_ITEM_MUTATION}
							variables={{ name, type: type }}
							onCompleted={props.toggle}
							update={(store, { data: { createFoodItem } }) =>
								props.addFoodItem(store, createFoodItem)
							}
						>
							{createFoodItemMutation => (
								<Button type="submit" onClick={() => {
									handleSubmit()
									createFoodItemMutation()
								}}>
									Add Item
								</Button>
							)}
						</Mutation>
					)}
			</Form>
		</div>
	);

}

export default FoodItemsForm;
