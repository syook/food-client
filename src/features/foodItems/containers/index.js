import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

import FoodItemsForm from './form';
import FoodItemTable from './table';
import { Button } from 'semantic-ui-react';
import { Mutation } from 'react-apollo';

const FOOD_ITEM_QUERY = gql`
	{
		foodItems {
			_id
			name
			type
		}
	}
`;

const GET_FOOD_ITEM = gql`
	query GetFoodItemQuery($id: String!) {
		foodItem(id: $id) {
			_id
			name
			type
		}
	}
`;

const DElETE_FOOD_ITEM = gql`
	mutation deleteFoodItemMutation($id: String!) {
		deleteFoodItem(id: $id) {
			_id
		}
	}
`;

class FoodItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'sandwich', type: 'breakfast' },
				{ name: 'paratha', type: 'breakfast' },
				{ name: 'sandwich', type: 'breakfast' },
				{ name: 'paratha', type: 'breakfast' },
				{ name: 'sandwich', type: 'breakfast' },
				{ name: 'paratha', type: 'breakfast' },
				{ name: 'sandwich', type: 'breakfast' },
				{ name: 'paratha', type: 'breakfast' },
			],
			isAddItem: false,
			foodItem: null,
		};
	}

	componentDidMount() {
		if (this.props.match.params.id) {
			this.fetchFoodItem(this.props.match.params.id);
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.id !== prevProps.match.params.id)
			if (this.props.match.params.id !== prevProps.match.params.id) {
				this.fetchFoodItem(this.props.match.params.id);
			}
	}

	fetchFoodItem = async id => {
		const response = await this.props.client.query({
			query: GET_FOOD_ITEM,
			variables: { id },
		});
		const { foodItem } = response.data;
		this.setState({ foodItem });
	};

	toggle = () => {
		this.setState({ isAddItem: !this.state.isAddItem });
	};

	addFoodItem = (store, foodItem) => {
		const data = store.readQuery({ query: FOOD_ITEM_QUERY });
		data.foodItems.unshift(foodItem);
		store.writeQuery({
			query: FOOD_ITEM_QUERY,
			data,
		});
	};

	updateFoodItem = (store, foodItem) => {
		const data = store.readQuery({ query: FOOD_ITEM_QUERY });
		const index = data.foodItems.findIndex(item => item._id === foodItem._id);
		data[index] = foodItem;
		store.writeQuery({
			query: FOOD_ITEM_QUERY,
			data,
		});
	};

	editFoodItem = id => {
		this.props.history.push(`/fooditems/${id}`);
	};

	deleteFoodItem = (store, foodItem) => {
		const data = store.readQuery({ query: FOOD_ITEM_QUERY });
		const index = data.foodItems.findIndex(item => item._id === foodItem._id);
		const newData = [...data.foodItems];
		newData.splice(index, 1);
		store.writeQuery({
			query: FOOD_ITEM_QUERY,
			data: { ...data, foodItems: newData },
		});
	};

	render() {
		return (
			<div style={{ marginTop: '80px', width: '90vw' }}>
				<FoodItemsForm toggle={this.toggle} addFoodItem={this.addFoodItem} updateFoodItem={this.updateFoodItem} foodItem={this.state.foodItem} />

				<>
					<FoodItemTable currentData={this.state.data} toggle={this.toggle} />
					<Query query={FOOD_ITEM_QUERY}>
						{({ loading, error, data }) => {
							if (loading) return <div>Fetching</div>;
							if (error) return <div>Error</div>;

							const foodItems = data.foodItems;
							return (
								<div>
									{foodItems.map(foodItem => (
										<>
											<p>
												{foodItem.name} - {foodItem.type} -{' '}
												<Button onClick={() => this.editFoodItem(foodItem._id)}>Edit</Button>
												<Mutation
													mutation={DElETE_FOOD_ITEM}
													variables={{ id: foodItem._id }}
													update={(store, { data: { deleteFoodItem } }) =>
														this.deleteFoodItem(store, deleteFoodItem)
													}
												>
													{deleteFoodItemMutation => (
														<Button type="submit" onClick={deleteFoodItemMutation}>
															Delete
														</Button>
													)}
												</Mutation>
											</p>
										</>
									))}
								</div>
							);
						}}
					</Query>
				</>
			</div>
		);
	}
}

export default withApollo(FoodItems);
