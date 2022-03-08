
import { Form, Input, Button, Checkbox ,Layout} from 'antd';
import React from 'react'
import styled from 'styled-components'


const LoginLayout = styled(Layout)`
height: 750px;
/* background-color: #FFFFFF; */
display: flex;
justify-content: center;
background: #FFEFBA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFFFFF, #FFEFBA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, beige, beige); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const GoogleButton  = styled.button`
border: none;
background-color: thistle;
color: black;
height: 30px;
width: max-content;
border-radius: 5px;

.hover{
  height  : 32px;
  color: yellow;
}

`

const Card = styled.div`
background-color: aliceblue;
border: black;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 10%;
height: 400px;
width: 600px;
`
export default function LoginPage() {

  return (
<LoginLayout>
<Card>
<GoogleButton>
<a href="/api/auth/login">Login</a>




</GoogleButton>
</Card>
</LoginLayout>
  )
}
