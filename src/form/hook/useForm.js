import React, { useState } from "react"

const initialValue = {
  account: "",
  name: "",
  address: "",
  mobile: "",
  birthday: "",
  country: "",
  opinion: "",
  documents: [],
  condition: {
    condition1: false,
    condition2: false
  },
};

function useForm() {

    const [formData, setFormData] = useState({...initialValue})
    const {documents} = formData


  const inputHandler = (e) => {
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

  const documentHandler = e => {

    if(e.target.checked){
      setFormData({
        documents: [...formData.documents, e.target.value]
      })
    }else{
      const document = documents.filter(item => item !== e.target.value)
      console.log(document)
      setFormData({document})
    }
  }

    return{
        formData,
        inputHandler,
        checkBoxHandler,
        documentHandler,
        submitHandler
    }
}

export default useForm