import React, { useState } from 'react'
import { useRouter } from 'next/router';
import LoginPage from '../../src/components/login/login';
// import LoginPage from "../../src/components/login/login"
function Credentials() {
    const para = useRouter();
    const page = para.query.value
    const [paraname,setParaName] = useState("")
    if (page == "login"){
        setParaName("login")
    }
    else{
        setParaName("register")
    }
    return <LoginPage name = {paraname}/>

}

export default Credentials