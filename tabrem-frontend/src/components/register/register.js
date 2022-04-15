import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../assest/tabfinal.png'
import  { useRouter } from 'next/router';
import { Formbutton, FormInput, H2, LoginBox, LoginBoxLeft, LoginContainer } from '../loginStyles';



export default function Register() {
    
    const router = useRouter()
    const [name,setName] = useState("")
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
e.preventDefault();
  await fetch('http://localhost:8080/api/register',{
      method:"POST",
      credentials:"include",
      mode:'no-cors',
      headers: {
          "content-type":"application/json"
      },
      body: JSON.stringify({
        name:name,
        email:useremail,
        password:userpassword,
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
      <H2>Register</H2><br/><br/>
       <FormInput type="text"   placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}>
  </FormInput>
      <div><FormInput type="email"   placeholder="Enter Email" value={useremail} onChange={emailValidation}></FormInput><br/>
  {emaillabel}
      </div>
      <div>
  
      <FormInput type="password"   placeholder="Enter password" value={userpassword} onChange={passwordValidation}>
        </FormInput>
        {passlabel}
      </div>
        <br/><br/>
  <Formbutton  onClick={formSubmitHandler} type="submit">Register</Formbutton>
      </LoginBox>
      </LoginContainer>
          </>
      );
}
