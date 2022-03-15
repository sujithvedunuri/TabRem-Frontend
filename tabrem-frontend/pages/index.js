import {Layout} from 'antd'
// import 'antd/dist/antd.css';
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
background: beige;
height: 700px;
flex:50%;
`
const HomeLayout = styled(Layout)`
display: flex;
background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FFFFFF, #FFEFBA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

flex-wrap: wrap;
`

const HomeHeading = styled.p`
color: black;
font-size: 2rem;
font-weight:bold;
margin-top: 30%;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export default function Home() {
  return (

<HomeLayout>

<HomeLayoutLeft>
<HomeHeading>
  Never ever forget 
  again to<br/> take medicine
<br/>
<br/>
<b>we're here to remind you!</b>
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
