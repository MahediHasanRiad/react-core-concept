import React, { useState } from "react"

const initialValue = {
  account: "",
  name: "",
  address: "",
  mobile: "",
  birthday: "",
  country: "",
  opinion: "",
  condition: {
    condition1: false,
    condition2: false
  },
};

function useForm() {

    const [formData, setFormData] = useState({...initialValue})

  const inputHandler = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
     [e.target.name]: e.target.value
    });
  };

  const checkBoxHandler = e => {
    setFormData({
        ...formData,
         condition: {
        ...formData.condition,
        [e.target.name]: e.target.checked
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

    return{
        formData,
        inputHandler,
        checkBoxHandler,
        submitHandler
    }
}

export default useForm