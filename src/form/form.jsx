import React, { useState } from "react";
import cls from "./form.module.css";
import useForm from "./hook/useForm";
import InputRadio from "./component/input-radio";
import Input from "./component/input";
import CheckBox from "./component/checkbox";

function Form() {
  const {
    formData,
    inputHandler,
    checkBoxHandler,
    documentHandler,
    submitHandler,
  } = useForm();

  return (
    <>
      <form>
        <span>
          <b>Account type: </b>
        </span>{" "}
        <br />
        <InputRadio
          id="personal"
          name="account"
          value="personal-account"
          onChange={inputHandler}
          labelText="Personal Account"
        />
        <InputRadio
          id="business"
          name="account"
          value="business-account"
          onChange={inputHandler}
          labelText="Business Account"
        />{" "}
        <br />
        <Input
          labelText="Name"
          id="name"
          name="name"
          value={formData.name}
          onChange={inputHandler}
        />
        <br />
        <Input
          labelText="Address"
          id="address"
          name="address"
          value={formData.address}
          onChange={inputHandler}
        />
        <br />
        <Input
          labelText="Mobile"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={inputHandler}
        />
        <br />
        <Input
          labelText="Birth-Day"
          type="date"
          id="birthday"
          name="birthday"
          value={formData.birthday}
          onChange={inputHandler}
        />
        <br />
        <select
          className="form-control"
          name="country"
          id="country"
          value={formData.country}
          onChange={inputHandler}
        >
          <option value="">Select Country</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
        </select>
        <br />
        <textarea
          className="form-control"
          name="opinion"
          id=""
          placeholder="Tell me about your opinion..."
          cols="50"
          rows="5"
          value={formData.opinion}
          onChange={inputHandler}
        />
        <br />
        <span>Documents: </span> <br />
        {/* name will be same */}
        <CheckBox
          labelText="ID Card"
          id="idCard"
          name="idCard"
          value="idcard"
          checked={formData.documents.includes("idcard")}
          onChange={documentHandler}
        />
        <span>Teams and Condition: </span>
        <br />
        <InputRadio
          labelText="Condition-1"
          type="checkbox"
          id="condition1"
          name="condition1"
          value={formData.condition.condition1}
          onChange={checkBoxHandler}
        />{" "}
        <br />
        <InputRadio
          labelText="Condition-2"
          type="checkbox"
          id="condition2"
          name="condition2"
          value={formData.condition.condition2}
          onChange={checkBoxHandler}
        />{" "}
        <br />
        <button className="btn" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
