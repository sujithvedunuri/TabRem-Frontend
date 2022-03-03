import { Layout } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import mobile from "../../../assest/mobile.png"


const MobileLayout = styled(Layout)`
height: 600px;
/* background-color:rebeccapurple; */
` 
const Box = styled.div`
height: 600px;
`

export default function Mobile() {
  return (

    // <MobileLayout>
      <Box>
    <Image  src={mobile} ></Image>
      </Box>
    // </MobileLayout>

  )
}
