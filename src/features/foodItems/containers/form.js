import React from 'react';
import { Form, Button } from 'semantic-ui-react';
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

class FoodItemsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			foodItem: {
				name: '',
				type: 'breakfast',
			},
			options: [
				{ text: 'Breakfast', value: 'breakfast' },
				{ text: 'Lunch', value: 'lunch' },
			],
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.foodItem && this.props.foodItem !== prevProps.foodItem) {
			this.setState({
				foodItem: this.props.foodItem,
			});
		}
	}

	handleChange = e => {
		if (e.target)
			this.setState({
				foodItem: {
					...this.state.foodItem,
					[e.target.name]: e.target.value,
				},
			});
		else this.setState({ type: e });
	};

	render() {
		const { name, type } = this.state.foodItem;
		console.log(name, type);
		return (
			<div>
				<Form>
					<Form.Field>
						{/* <Form.Select
              fluid
              label="Type"
              name="type"
              options={this.state.options}
              placeholder="Type"
              onChange={(e, { value }) => this.handleChange(value)}
            /> */}
						<Form.Dropdown
							fluid
							name="defaultRice"
							defaultValue={'breakfast'}
							placeholder="Rice"
							options={this.state.options}
							onChange={(e, { value }) => this.handleChange(value)}
						/>
					</Form.Field>
					<Form.Field>
						<label> Name</label>
						<input
							name="name"
							placeholder="Item Name"
							type="text"
							value={name}
							onChange={this.handleChange}
						/>
					</Form.Field>
					<Button onClick={this.props.toggle}>Cancel</Button>
					{!!this.props.foodItem ? (
						<Mutation
							mutation={UPDATE_FOOD_ITEM_MUTATION}
							variables={{ id: this.props.foodItem._id, name, type: type }}
							onCompleted={this.props.toggle}
							update={(store, { data: { updateFoodItem } }) =>
								this.props.updateFoodItem(store, updateFoodItem)
							}
						>
							{createFoodItemMutation => (
								<Button type="submit" onClick={createFoodItemMutation}>
									Submit
								</Button>
							)}
						</Mutation>
					) : (
						<Mutation
							mutation={CREATE_FOOD_ITEM_MUTATION}
							variables={{ name, type: type }}
							onCompleted={this.props.toggle}
							update={(store, { data: { createFoodItem } }) =>
								this.props.addFoodItem(store, createFoodItem)
							}
						>
							{createFoodItemMutation => (
								<Button type="submit" onClick={createFoodItemMutation}>
									Submit
								</Button>
							)}
						</Mutation>
					)}
				</Form>
			</div>
		);
	}
}

export default FoodItemsForm;
