
import React, { useState } from "react";
import '../loginStyles'
import { FormInput, LoginBox, LoginContainer ,LoginBoxLeft,Formbutton,H2} from "../loginStyles";
import logo from "../../../assest/tabfinal.png"
import Image from "next/image";
import Router, { useRouter } from "next/router";

const LoginPage = (props) => {
  const router  = useRouter()
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


const formSubmitHandler = async (e) =>{
e.preventDefault()
await fetch('http://localhost:8080/api/login',{
  method:"POST",
  mode:"no-cors",
  credentials:"include",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify({
    email:useremail,
    password:userpassword
  })
})
await router.push("/")
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
    <H2>Login</H2><br/><br/>
    <div><FormInput type="email"   placeholder="Enter Email" value={useremail} onChange={emailValidation}></FormInput><br/>
{emaillabel}
    </div>
    <div>

    <FormInput type="password"   placeholder="Enter password" value={userpassword} onChange={passwordValidation}>
      </FormInput>
      {passlabel}
    </div>
      <br/><br/>
<Formbutton ab = {isLoginReady} onClick={formSubmitHandler} type="submit">Login</Formbutton>
    </LoginBox>
    </LoginContainer>
        </>
    );
};

export default LoginPage;