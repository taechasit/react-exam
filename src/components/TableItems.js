import React from "react";
import styled from "styled-components";

const TableItems = (props) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={props.isSelect}
          onChange={() => props.onselect(props.data)}
        />
      </td>
      <td>
        {props.data.firstName} {props.data.lastName}
      </td>
      <td>{props.data.gender}</td>
      <td>
        {props.data.phoneCode} {props.data.phone}
      </td>
      <td>{props.data.nationality}</td>
      <td>
        <StyledButton onClick={() => props.onedit(props.data)}>
          Edit
        </StyledButton>
        <StyledButton onClick={() => props.ondelete(props.data.citizenID)}>
          Delete
        </StyledButton>
      </td>
    </tr>
  );
};

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

export default TableItems;
