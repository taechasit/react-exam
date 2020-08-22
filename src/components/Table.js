import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import * as actions from "../store/actions/actionsindex";
import TableItems from "./TableItems";

const Table = (props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const [pagePerPost, setpagePerPost] = useState(10);

  const { onSetData,onDeleteSelectData } = props;

  useEffect(() => {
    onSetData();
  }, [onSetData]);

  let tablerow = null;
  if (props.datas !== undefined) {
    const lastPageIndex = currentPage * pagePerPost;
    const firstPageIndex = lastPageIndex - pagePerPost;

    tablerow = props.datas
      .slice(firstPageIndex, lastPageIndex)
      .map((item, index) => {
        return (
          <TableItems
            data={item}
            key={index}
            ondelete={props.onDeleteData}
            onedit={props.onEdit}
            onselect={props.onSelectData}
          />
        );
      });
  }

  return (
    <TableDiv>
      <div
        style={{
          textAlign: "end",
          margin: "0px 6%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledButton
          style={{ textAlign: "start" }}
          onClick={() => onDeleteSelectData()}
        >
          Delete
        </StyledButton>
        <div>
          <StyledButton
            onClick={() => {
              setcurrentPage(currentPage - 1);
            }}
          >
            Prev
          </StyledButton>
          <select className="se"
                value={pagePerPost}
                style={{ margin: "0px 15px" }}
                onChange={(e) => setpagePerPost(+e.target.value)}
              >
                <option value="" disabled={true}>
                  --Please Select--
                </option>
                <option value="10">10.</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
          <StyledButton
            onClick={() => {
              setcurrentPage(currentPage + 1);
            }}
          >
            Next
          </StyledButton>
        </div>
      </div>
      <table style={{ width: "100%", border: "#fff 1px solid" }}>
        <thead style={{ backgroundColor: "#faebd7" }}>
          <tr style={{ height: "40px" }}>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Mobile Phone</th>
            <th>Nationality</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tablerow}</tbody>
      </table>
    </TableDiv>
  );
};

const TableDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  min-height: 530px;
  margin: 50px auto;
  background-color: #fff;
  box-shadow: 0px 20px 30px 1px rgba(133, 133, 133, 1);
  text-align: center;
  select {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 0px;
    box-sizing: border-box;
    :focus {
      outline: none;
      background-color: #e9e9e9;
    }
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: #5a5a5a 2px solid;
  border-radius: 5px;
  color: #5a5a5a;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 4px;
  margin: 4px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  :hover {
    transition: all 0.5s ease-in-out;
    background-color: #5a5a5a;
    border: #5a5a5a 2px solid;
    color: #fff;
  }
  :disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  
`;

const mapStateToProps = (state) => {
  return {
    datas: state.table.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetData: () => dispatch(actions.setData()),
    onDeleteData: (citizenID) => dispatch(actions.deleteData(citizenID)),
    onSelectData: (data) => dispatch(actions.selectData(data)),
    onDeleteSelectData: () => dispatch(actions.deleteSelectData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
