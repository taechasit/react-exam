import * as actionTypes from "../actions/actiontypes";

const initialState = {
  data: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_DATA:
      if (state.data === undefined) {
        localStorage.setItem(
          "data",
          JSON.stringify({ ...state, data: [payload.data] })
        );
        const data = JSON.parse(localStorage.getItem("data"));

        return data;
      }
      localStorage.setItem(
        "data",
        JSON.stringify({ ...state, data: state.data.concat(payload.data) })
      );
      const data = JSON.parse(localStorage.getItem("data"));

      return data;

    case actionTypes.SET_DATA:
      const dataSet = JSON.parse(localStorage.getItem("data"));
      if (dataSet === null || dataSet === undefined) {
        return state;
      }

      return dataSet;

    case actionTypes.DELETE_DATA:
      const newData = state.data.filter((item, index) => {
        return item.citizenID !== payload.citizenID;
      });
      localStorage.setItem("data", JSON.stringify({ data: newData }));
      const dataafterDel = JSON.parse(localStorage.getItem("data"));
      return dataafterDel;

    case actionTypes.EDIT_DATA:
      const newEditData = state.data.map((item, index) => {
        if (item.citizenID === payload.editData.citizenID) {
          return (item[index] = payload.editData);
        }
        return item;
      });
      localStorage.setItem("data", JSON.stringify({ data: newEditData }));
      const dataafterEdit = JSON.parse(localStorage.getItem("data"));
      return dataafterEdit;

    case actionTypes.SELECT_DATA:
      const newSelectData = state.data.map((item, index) => {
        if (item.citizenID === payload.selectData.citizenID) {
          item.isSelect = !payload.selectData.isSelect;
        }
        return item;
      });
      localStorage.setItem("data", JSON.stringify({ data: newSelectData }));
      const dataafterSelect = JSON.parse(localStorage.getItem("data"));
      return dataafterSelect;

    case actionTypes.DELETE_SELECT_DATA:
      const newDeleteData = state.data.filter((item, index) => {
        return !item.isSelect;
      });
      localStorage.setItem("data", JSON.stringify({ data: newDeleteData }));
      const dataafterSelectDel = JSON.parse(localStorage.getItem("data"));
      return dataafterSelectDel;

    default:
      return state;
  }
};
