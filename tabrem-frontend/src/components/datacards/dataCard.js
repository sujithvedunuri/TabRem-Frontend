import React from 'react'
import { CardBox,CardContainer,CardItem ,DeleteButton,EditButton} from './datacardsStyles'
import { useState,useEffect } from 'react'
import styled from 'styled-components'

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:8080/getmedicines");
//   const lis = await res.json()
//   return {
//     props: {  lists, }
//   }  
// }




function DataCard() {
  const [medicinelist,setMedicineList] = useState([])
  useEffect(()=> {
      async function getData(){
      const getMedicineData =  await fetch("http://localhost:8080/getmedicines");
    getMedicineData.json().then(r=>{
      setMedicineList(r)
      })
    
        // const json = response.json();
        // setMedicineList(json)
        // console.log(json)
      }
      getData()
      },[])


    
        
const Button = styled.button`
background-color: #2596be;
color: white;
border: none;
height: 40px;
border-radius: 5px;
margin-left: calc(45%);
margin-top: 10px;
`


  const MainDataCardComponent = (key)=>{
      console.log(key)
  return(
    <CardItem key={key.ID}>
      <h2>
  {(key.tablet_name)}
      </h2>
      <p>{key.medicine_type}</p>
      <p>Dosage: {key.medicine_dosage}</p>
  <EditButton>
    Edit
  </EditButton>
  <DeleteButton onClick={(e)=>{
    fetch(
  `http://localhost:8080/deletemedicine/${key.ID}`,{
  method:"POST",
  mode:"no-cors",
  headers:{"Content-Type":"application/json"},
  body:{ 
  }
  }
    )
  }}
  >
    Delete
  </DeleteButton>
  
    </CardItem>
  )
  }

  return (
    <>
  <Button>
    Add Medicine
  </Button>

    <CardContainer> 
    <CardBox>
      {medicinelist.map(
        MainDataCardComponent
        )}
</CardBox>
</CardContainer> 
        </>
  )
}

export default DataCard