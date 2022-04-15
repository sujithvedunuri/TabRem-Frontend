import React from 'react'
import { useState } from 'react'
import { CardBox, CardContainer } from './datacardsStyles'
import Select from 'react-select';

import styled, {createGlobalStyle, css} from "styled-components"

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


export  const SharedStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
`
export  const StyledFormWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0 30%;

h2 {
margin-left: 41%;
padding-bottom: 10px;
}
`
export  const StyledForm = styled.form`
width: 500px;
max-width: 700px;
padding: 40px;
background-color: #fff;
border-radius: 10px;
box-shadow: border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`
export  const StyledInput = styled.input`
display: block;
width: 100%;
${SharedStyles}
`
export  const StyledButton = styled.button`
display: block;
background: linear-gradient(to top,lightblue , teal);
color: black;
font-size: .9rem;
border: 0;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
margin-left: 38%;
`

export const InvalidLoginText =styled.p`
font-size: 14px;
color: red;
`


export const MedFormInput = styled.input`
font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`


export default function MedicineForm() {



const [medName,setMedName] =useState("")
const [medType,setMedtype] =useState("")
const [medDosage,setmedDosage] =useState(0)
const [daystoRemind,setNoOfDaysToRemind] = useState(0)
console.log(medName)
const medNameHandler =(event) =>{
    setMedName(event.target.value)
}
const medTypeHandler =(event) =>{
    setMedtype(event.value)

}
const medDosageHandler =(event) =>{
    setmedDosage(event.target.value)
}
const daysToRemindHandler =(event) =>{
    setNoOfDaysToRemind(event.target.value)
}

const options = [
     {value: 'Tablet', label:'Tablet'} ,
     {value: 'Tonic' ,label:"Tonic"},
  ];
  
const medFormHandler =  (e)=>{
    e.preventDefault()
    const datafetch = async ()=>{
        
        const response = await fetch('http://localhost:8080/addmedicine',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'

            },
            body:JSON.stringify(
                {
                    "tablet_name":medName,
                    "medicine_type":medType,
                    "medicine_dosage":Number(medDosage),
                    "days_to_remind":Number(daystoRemind)
                }
                )
                
            });
            console.log(response,"sujith")
            if (response.status==200){
                toast.success("Medicine added succesfully");
            } else if (response.status==400){
                toast.error("Medicine already Exists")
            }else{
                toast.error("unable to add medicine")

            }


}
datafetch()
}



  return (
<>

<StyledFormWrapper>
    <StyledForm onSubmit={medFormHandler} >
        <h2>Add Medicine </h2>
        <h3 >Medicine Name</h3>
        <StyledInput onChange={medNameHandler} type="text" placeholder="Ex:-Dolo" />
        <h3 >Medicine Type</h3>
        <Select
        defaultValue={medType}
        onChange={medTypeHandler}
        options={options}
      />
        <h3 >Medicine Dosage</h3>
        <StyledInput onChange={medDosageHandler} type="number" placeholder="Ex:- 650 mg" />
        <h3 >No of days to Remind</h3>
        <StyledInput onChange={daysToRemindHandler} type="number" placeholder="Ex:- 7 days" />

        {/* {userDetails["Err"]!=null && <InvalidLoginText>Incorrect Username or Password</InvalidLoginText> }  */}
        <StyledButton>Add Medicine</StyledButton>
    </StyledForm>
    </StyledFormWrapper>
</>

)
}
