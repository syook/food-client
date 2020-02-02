import React, { useState } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { FOOD_ITEM_QUERY, CREATE_FOOD_ITEM_MUTATION, UPDATE_FOOD_ITEM_MUTATION, DElETE_FOOD_ITEM } from '../graphQl';

const options = [
  { text: 'Breakfast', value: 'breakfast' },
  { text: 'Lunch', value: 'lunch' }
];

const FoodItemTable = () => {
  const { loading, error, data } = useQuery(FOOD_ITEM_QUERY);

  const [addFoodItem] = useMutation(CREATE_FOOD_ITEM_MUTATION, {
    update(cache, { data }) {
      const { foodItems } = cache.readQuery({ query: FOOD_ITEM_QUERY });
      cache.writeQuery({
        query: FOOD_ITEM_QUERY,
        data: { foodItems: foodItems.push(data.createFoodItem) }
      });
    }
  });

  const [updateFoodItem] = useMutation(UPDATE_FOOD_ITEM_MUTATION, {
    update(cache, { data }) {
      const { foodItems } = cache.readQuery({ query: FOOD_ITEM_QUERY });
      const index = foodItems.findIndex(f => f._id === data.updateFoodItem._id);
      foodItems[index] = data.updateFoodItem;
      cache.writeQuery({
        query: FOOD_ITEM_QUERY,
        data: { foodItems }
      });
    }
  });

  const [deleteFoodItem] = useMutation(DElETE_FOOD_ITEM, {
    update(cache, { data }) {
      const { foodItems } = cache.readQuery({ query: FOOD_ITEM_QUERY });
      cache.writeQuery({
        query: FOOD_ITEM_QUERY,
        data: { foodItems: foodItems.filter(f => f._id !== data.deleteFoodItem._id) }
      });
    }
  });

  let [menuItem, setMenuItem] = useState({ id: null, name: '', type: 'breakfast' });
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = menuItem => {
    setOpenModal(!openModal);
    setMenuItem({
      id: menuItem ? menuItem._id : null,
      name: menuItem ? menuItem.name : '',
      type: menuItem ? menuItem.type : 'breakfast'
    });
  };

  const submit = e => {
    e.preventDefault();

    const { id, ...rest } = menuItem;
    if (!menuItem.id) addFoodItem({ variables: { ...rest } });
    if (menuItem.id) updateFoodItem({ variables: { id, ...rest } });

    toggleOpenModal();
  };

  if (loading) return <div>Fetching</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <div>
        <p>Name - Type - </p>
        <Button onClick={toggleOpenModal}>Add</Button>
      </div>

      {data.foodItems.map(foodItem => (
        <p key={foodItem._id}>
          {foodItem.name} - {foodItem.type} -{' '}
          <Button
            onClick={e => {
              e.preventDefault();
              toggleOpenModal(foodItem);
            }}
          >
            Edit
          </Button>{' '}
          -{' '}
          <Button type="submit" onClick={e => deleteFoodItem({ variables: { id: foodItem._id } })}>
            Delete
          </Button>
        </p>
      ))}

      <div>
        <Modal open={openModal} onClose={toggleOpenModal} closeIcon>
          <div>
            <Form>
              <Form.Field>
                <label> Name</label>
                <input
                  placeholder="Item Name"
                  type="text"
                  value={menuItem.name || ''}
                  onChange={e => setMenuItem({ ...menuItem, name: e.target.value })}
                />
              </Form.Field>

              <Form.Field>
                <Form.Dropdown
                  fluid
                  placeholder="Rice"
                  options={options}
                  value={menuItem.type}
                  onChange={(e, { value }) => setMenuItem({ ...menuItem, type: value })}
                />
              </Form.Field>

              <Button onClick={toggleOpenModal}>Cancel</Button>
              <Button onClick={submit}>Submit</Button>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default FoodItemTable;
