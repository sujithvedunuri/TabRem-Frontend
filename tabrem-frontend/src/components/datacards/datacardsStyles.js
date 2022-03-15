import styled from "styled-components";

export const CardBox = styled.div`
min-height: 500px;
max-height: fit-content;
width: 80%;
text-align: center;
box-shadow: 5rem;
border-radius: 10px;
border-color: aquamarine;
margin-top: 10%;
background-color: white;
justify-self: center;
justify-content: center;
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); 

`

export const CardContainer = styled.div`
display: flex;
justify-content: center;
`

export const CardItem = styled.div`
height: 100px;
margin: 30px;
background-color: azure;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 245, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); 
`
export const DeleteButton = styled.button`
border: none;
background-color: red;
color: white;
border-radius: 5px;


`
export const EditButton = styled.button`

border: none;
background-color: green;
color: white;
border-radius: 5px;
`
