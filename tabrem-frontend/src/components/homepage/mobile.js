import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import mobile from "../../../assest/mobile.png"


const MobileLayout = styled(Layout)`
/* background-color:rebeccapurple; */
` 
const Box = styled.div`
height: fit-content;
width: 100%;
/* background-color: azure; */
display: flex;
justify-content: center;
`

export default function Mobile() {
  return (

    // <MobileLayout>
      <Box>
    <Image  src={mobile} height={700} width={420}/>
      </Box>
    // </MobileLayout>

  )
}
