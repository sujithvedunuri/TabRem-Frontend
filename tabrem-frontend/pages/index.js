import {Layout} from 'antd'
import { useEffect } from 'react';
import styled from 'styled-components';
import Mobile from "../src/components/homepage/mobile"


const HomeLayoutLeft = styled(Layout)`
/* background: whitesmoke; */
text-align: center;
flex: 50%;
width: 50%;
height: 700px;
`
const HomeLayoutRight = styled(Layout)`
background: #c8e7e6;
height: 700px;
flex:50%;
`
const HomeLayout = styled(Layout)`
display: flex;
/* background-color: #8ab8c5;  */
background-color: #eef4f0;
/* background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA); 
background: linear-gradient(to right, #FFFFFF, #FFEFBA);  */
flex-wrap: wrap;
`

const HomeHeading = styled.div`
color: black;
font-size: 2rem;
font-weight:bold;
margin-top: 30%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export default function Home() {
  useEffect(()=>
  {
  async function userdata() {

    const response = await fetch("http://localhost:8080/api/user",{
      credentials:"include",
      mode:"no-cors"
    }).then((res)=>{
      const json = res.body
      console.log(json)
    })
    console.log(response)
  }

  userdata()
}, [])
  return (

<HomeLayout>

<HomeLayoutLeft>
<HomeHeading>
  Never ever forget 
  again to<br/> take medicine
<br/>
<br/>
<h5>we're here to remind you!</h5>
</HomeHeading>
</HomeLayoutLeft>
<HomeLayoutRight>
  <Mobile/>
</HomeLayoutRight>
</HomeLayout>

  // <HomeLayout>
  //   home page!!
  // </HomeLayout>
  )
}
