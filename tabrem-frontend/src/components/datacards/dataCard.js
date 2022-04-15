import React from 'react'
import { CardBox,CardContainer,CardItem ,DeleteButton,EditButton} from './datacardsStyles'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import MedicineForm from './medicineform'





function DataCard() {

  const [medicinelist,setMedicineList] = useState([])
  const [medicineViewState, setMedicineViewState] = useState(true)
  const [viewstate,setViewState] = useState(false)
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
const toggleButton = (e)=>{
  setMedicineViewState(!medicineViewState)
  setViewState(!viewstate)

}

  const MainDataCardComponent = (med)=>{
      console.log(med)
  return(
<>


    <CardItem key={ med && med.id}>
      <h2>
  {med && med.tablet_name}
      </h2>
      <p>{med && med.medicine_type}</p>
      <p>Dosage: {med && med.medicine_dosage}</p>
  <EditButton>
    Edit
  </EditButton>
  <DeleteButton onClick={(e)=>{
    fetch(
      `http://localhost:8080/deletemedicine/${med.id}`,{
        method:"POST",
        mode:"no-cors",
        headers:{"Content-Type":"application/json"},
      }
      )
      
  }}
  >
    Delete
  </DeleteButton>
  
    </CardItem>
  
    </>
  )
  }



  return (
    <>
  <Button onClick={toggleButton}>
    {viewstate?"check your Medicine List":"Wanna Add Medicine?"}
  </Button>
  <br/><br/>

    { medicineViewState ?
    <CardContainer> 
    <CardBox>
      {medicinelist.length==0?<h3>No Medicines to remind, <br/>Please add  Medicine</h3>: medicinelist.map(
        MainDataCardComponent
        )}
</CardBox>
</CardContainer> :<MedicineForm/>}
        </>
  )
}

export default DataCard