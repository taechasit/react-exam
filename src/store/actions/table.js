import * as actionType from "./actiontypes";

export const addData = (data) => {
  return {
    type: actionType.ADD_DATA,
    payload: { data: data },
  };
};

export const setData = () => {
  return {
    type: actionType.SET_DATA,
    payload: {},
  };
};

export const deleteData = (citizenID) => {
  return {
    type: actionType.DELETE_DATA,
    payload: { citizenID: citizenID },
  };
};

export const editData = (data) => {
  return {
    type: actionType.EDIT_DATA,
    payload: { editData: data },
  };
};

export const selectData = (data) => {
  return {
    type: actionType.SELECT_DATA,
    payload: { selectData: data },
  };
};
export const deleteSelectData = () => {
  return {
    type: actionType.DELETE_SELECT_DATA,
    payload: {},
  };
};
