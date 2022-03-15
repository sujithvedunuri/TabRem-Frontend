import Layout from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DataCard from '../../src/components/datacards/dataCard';


const Box = styled.div`
background-color: aliceblue;
height: 400px;
width: 345px;
`

const meth =(e)=>{
<h1>
  {e.table_name}
</h1>
}

export default function Features() {
const [medicinelist,setMedicineList] = useState([])
useEffect(()=> {
  async function retriveMedcine () { 
   
  const response = await fetch("http://localhost:8080/getmedicines");
  const  json = response.json()
    setMedicineList(json)
    console.log(json)
}

retriveMedcine()

},[]);

  return (
    <>
  
   {/* <h1>
       features -1
    </h1>
    <a href="/api/auth/logout">Logout</a> */}
   <DataCard/>
    
    </>


  )
}
