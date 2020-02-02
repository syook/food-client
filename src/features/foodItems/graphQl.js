import gql from "graphql-tag";

export const FOOD_ITEM_QUERY = gql`
  {
    foodItems {
      _id
      name
      type
    }
  }
`;

export const GET_FOOD_ITEM = gql`
  query GetFoodItemQuery($id: String!) {
    foodItem(id: $id) {
      _id
      name
      type
    }
  }
`;

export const DElETE_FOOD_ITEM = gql`
  mutation deleteFoodItemMutation($id: String!) {
    deleteFoodItem(id: $id) {
      _id
    }
  }
`;

export const CREATE_FOOD_ITEM_MUTATION = gql`
  mutation createFoodItemMutation($name: String!, $type: String!) {
    createFoodItem(name: $name, type: $type) {
      _id
      name
      type
    }
  }
`;

export const UPDATE_FOOD_ITEM_MUTATION = gql`
  mutation updateFoodItemMutation($id: String!, $name: String!, $type: String!) {
    updateFoodItem(id: $id, name: $name, type: $type) {
      _id
      name
      type
    }
  }
`;