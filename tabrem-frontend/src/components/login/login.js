
import React, { useState } from "react";
import './loginStyles'
import { FormInput, LoginBox, LoginContainer ,LoginBoxLeft,Formbutton} from "./loginStyles";
import logo from "../../../assest/tabfinal.png"
import Image from "next/image";
import Password from "antd/lib/input/Password";
import { METHODS } from "http";

const LoginPage = (props) => {
  const name = props.name;
  const [useremail ,setUserEmail]  = useState('')
  const [userpassword,setUserPassword] = useState('')
  const [isLoginReady,setLoginReady] = useState(false)
  const emailValidation=(event)=>{
    var email = event.target.value
    if (email.includes('@')){
      setLoginReady(true)
    }
    setUserEmail( email);
  }
  const passwordValidation= (event)=>{
    var pass = event.target.value
    if (pass.length>6){
      setLoginReady(true)
    }
    setUserPassword(pass);
  }


const formSubmitHandler = (event) =>{
  const requestOptions = {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: JSON.stringify({
      title: 'React POST login details',
    email: useremail,
    Password:userpassword

  })
};

fetch('http://localhost:8080/getUserDetails',requestOptions).then(res=>{console.log('response',res)}).catch(e=>{
console.log(e)
})
}

const emaillabel = useremail.length==0 || useremail.includes('@')?'':<span style={{color: "red"}}>Please Enter proper Email address
</span>
const passlabel = userpassword.length==0 || userpassword.length>6 ? '':<span style={{color: "red"}}>Password must be greater than 6 character
</span>

  return (
    <>
    <LoginContainer>
    <LoginBoxLeft>
<br/>
    <Image src={logo} height={100} width={200}></Image>
    </LoginBoxLeft>
    <LoginBox>
      <br/>
    <h2>{name}</h2><br/><br/>
    <div><FormInput type="email"   placeholder="Enter Email" value={useremail} onChange={emailValidation}></FormInput><br/>
{emaillabel}
    </div>
    <div>

    <FormInput type="password"   placeholder="Enter password" value={userpassword} onChange={passwordValidation}>
      </FormInput>
      {passlabel}
    </div>
      <br/><br/>
<Formbutton ab = {isLoginReady} onClick={formSubmitHandler} type="submit">{name}</Formbutton>
    </LoginBox>
    </LoginContainer>
        </>
    );
};

export default LoginPage;