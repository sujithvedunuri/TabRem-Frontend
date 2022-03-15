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

  return (
    <>
  
  
   <DataCard />
    
    </>


  )
}
