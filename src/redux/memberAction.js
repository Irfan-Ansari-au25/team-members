import * as types from "./actionTypes";

const deleteMember = (id) => {
  return {
    type: types.DELETE_MEMBER,
    payload: id,
  };
};

export const addMember = (members) => {
  return {
    type: types.ADD_MEMBER,
    payload: members,
  };
};

export default deleteMember;
