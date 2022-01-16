import * as types from "./actionTypes";

const buyCake = () => {
  return {
    type: types.BUY_CAKE,
  };
};

export const addCake = (cakes) => {
  return {
    type: types.ADD_CAKE,
    payload: cakes,
  };
};

export default buyCake;
