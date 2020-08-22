import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as actions from "../store/actions/actionsindex";
import Table from "../components/Table";

const Home = (props) => {
  const [tltle, setTitle] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [birthDay, setbirthDay] = useState(new Date());
  const [nationality, setnationality] = useState("");
  const [citizenID, setcitizenID] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState("");
  const [phoneCode, setphoneCode] = useState("");
  const [passport, setpassport] = useState("");
  const [salary, setsalary] = useState(0);
  const [isSelect, setisSelect] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  const onsubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      title: tltle,
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      birthDay: birthDay,
      nationality: nationality,
      citizenID: citizenID,
      phoneCode: phoneCode,
      phone: phone,
      passport: passport,
      salary: salary,
      isSelect:isSelect,
    };
    if (isEdit) {
      props.onEditData(data);
      setisEdit(false);
    } else {
      props.onAddData(data);
    }
  };

  const onEdithandler = (datas) => {
    setisEdit(true);
    setTitle(datas.tltle);
    setfirstName(datas.firstName);
    setlastName(datas.lastName);
    setgender(datas.gender);
    setbirthDay(datas.birthDay);
    setnationality(datas.nationality);
    setcitizenID(datas.citizenID);
    setphone(datas.phone);
    setphoneCode(datas.phoneCode);
    setpassport(datas.passport);
    setsalary(datas.salary);
    setisSelect(datas.isSelect)
  };

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        width: "100%",
        height: "auto",
      }}
    >
      <HomeDiv>
        <FromDiv>
          <div style={{ textAlign: "center", marginTop: "25px" }}>
            <h1>{isEdit ? "Edit" : "Add"}</h1>
          </div>
          <form style={{ margin: "50px" }} onSubmit={onsubmitHandler}>
            <div style={{ margin: "15px 0px" }}>
              <label>Title : </label>
              <select
                required
                value={tltle}
                style={{ margin: "0px 15px" }}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="" disabled={true}>
                  --Please Select--
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
              </select>
              <label>First Name : </label>
              <input
                style={{ margin: "0px 15px" }}
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
              />
              <label>Last Name : </label>
              <input
                style={{ margin: "0px 15px" }}
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <label>Birth Day : </label>
              <input
                type="date"
                style={{ margin: "0px 15px" }}
                value={birthDay}
                onChange={(e) => setbirthDay(e.target.value)}
                required
              />
              <label>Nationality : </label>
              <select
                style={{ margin: "0px 15px" }}
                value={nationality}
                onChange={(e) => setnationality(e.target.value)}
                required
              >
                <option value="" disabled={true}>
                  --Please Select--
                </option>
                <option value="THAI">THAI</option>
                <option value="AMERICAN">AMERICAN</option>
                <option value="LAOS">LAOS</option>
              </select>
            </div>
            <div style={{ margin: "15px 0px" }}>
              <label>CitizenID : </label>
              <input
                type="input"
                style={{ margin: "0px 15px" }}
                value={citizenID}
                onChange={(e) => setcitizenID(e.target.value)}
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <label>Gender : </label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                style={{ margin: "0px 15px" }}
                checked={gender === "male"}
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
              <label>Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                style={{ margin: "0px 15px" }}
                checked={gender === "female"}
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
              <label>Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                style={{ margin: "0px 15px" }}
                checked={gender === "other"}
                onChange={(e) => {
                  setgender(e.target.value);
                }}
              />
              <label>Other</label>
            </div>
            <div style={{ margin: "15px 0px" }}>
              <label>Mobile Phone : </label>
              <select
                value={phoneCode}
                style={{ margin: "0px 15px" }}
                onChange={(e) => setphoneCode(e.target.value)}
                required
              >
                <option value="" disabled={true}>
                  --Please Select--
                </option>
                <option value="+66">+66</option>
                <option value="+67">+67</option>
                <option value="+68">+68</option>
                <option value="+69">+69</option>
              </select>
              <input
                type="input"
                style={{ margin: "0px 15px" }}
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Passport NO. : </label>
              <input
                type="input"
                style={{ margin: "0px 15px" }}
                value={passport}
                onChange={(e) => setpassport(e.target.value)}
                required
              />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <label>Expect Salary : </label>
              <input
                type="number"
                style={{ margin: "0px 15px" }}
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
                required
              />
            </div>
            <div style={{ textAlign: "end" }}>
              <StyledButton type="submit">Submit</StyledButton>
            </div>
          </form>
        </FromDiv>
        <Table onEdit={onEdithandler} />
      </HomeDiv>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddData: (data) => dispatch(actions.addData(data)),
    onEditData: (data) => dispatch(actions.editData(data)),
  };
};

const StyledButton = styled.button`
  background-color: transparent;
  border: #5a5a5a 2px solid;
  border-radius: 5px;
  color: #5a5a5a;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
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

const HomeDiv = styled.div`
  width: 80%;
  height: auto;
  margin: auto;
  background-color: #f1f1f1;
`;

const FromDiv = styled.div`
  display: inline-block;
  width: 100%;
  height: auto;
  margin: 50px auto;
  border-radius: 40px;
  background-color: #fff;
  box-shadow: 0px 20px 30px 1px rgba(133, 133, 133, 1);
  input {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    box-sizing: border-box;
    :focus {
      outline: none;
      background-color: #ccc;
    }
  }
  select {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    box-sizing: border-box;
    :focus {
      outline: none;
      background-color: #ccc;
    }
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
