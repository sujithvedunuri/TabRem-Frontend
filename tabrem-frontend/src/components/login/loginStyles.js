import React from "react";
import styled from "styled-components";

export const LoginBox = styled.div`
height: 400px;
width: 400px;

text-align: center;
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); 
`

export const H2 = styled.h2`
font-family: 'Times New Roman', Times, serif;

`

export const Formbutton =styled.button`
border: none;
background-color: #085895;
/* background-color:  "blue"; */
opacity: ${props=>props.ab === true? 1 : 0.7};
color: white;
height: 30px;
width: fit-content;
box-shadow: 1rem;
`
export const LoginBoxLeft = styled.div`
height: 400px;
width: 400px;
/* background-color: #75CA9A; */
background-color: #7dd0df;
text-align: center;
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); 
`
export const LoginContainer = styled.div`
height: 800px;
padding-top: 10%;
width: 100%;
text-align: center;
display: flex;
justify-content: center;
`


export const FormInput = styled.input`
/* height: 30px; */
width: 350px;
margin: 5px 3px 3px 5px ;
border-radius: 5px;
border-color:teal;
::placeholder{
font-size: 15px;
padding-left: 10px;
font-family: 'Times New Roman', Times, serif;
}
`  
export const FormLabel = styled.label`


`