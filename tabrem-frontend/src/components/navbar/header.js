import { Layout, Menu } from 'antd'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'
// import logo from "../../../assest/tabremlogo.png"
import logo1 from "../../../assest/tabfinal.png"
import Image from 'next/image'

const HeaderCont = styled.div`
/* position: sticky; */
height: 90px;
background: #abdbe3;
/* display: flex; */
/* justify-content: start; */
-webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
box-shadow: 0 2px 5px 0 rgba(55, 161, 245, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); 

`

const Navb = styled.div`
display: flex;
justify-content: space-between;
`

const Logo = styled.div`
height: 100px;
width: 160px;
/* margin-top: -3px; */
padding-left: 40px;
padding-top: 15px;
cursor: pointer;
/* background-color: yellowgreen; */
`

const MenuItem = styled.div`
color:black;
padding-right :30px;
padding-top: 15px;
font-size: 18px;
text-decoration: none;
cursor: pointer;
`

const Menubox = styled.div`
display: flex;
padding: 20px;

justify-content: space-between;
` 
export default function HeaderBody() {

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
<HeaderCont>
  <Navb>
      <Logo>
      <Link href={"/"} passHref>
         <a>
    <Image src={logo1}/>
        </a>  
    </Link>
      </Logo>

      <Menubox>
      <Link href={"/"} passHref >
      <MenuItem>Home</MenuItem>
      </Link>
      <Link href={"/features"} passHref>
      <MenuItem>Features</MenuItem>
      </Link>

      {isLoggedIn?<div></div>:
      <>
      <Link href={"/credentials/login"} passHref >
      <MenuItem>Login</MenuItem>
      </Link> 
      <Link href={"/credentials/signup"} passHref>
      <MenuItem>Signup</MenuItem>
      </Link>
      </>
      }
      </Menubox>
    </Navb>
</HeaderCont>



//       <Navbar>
//    <h2>TabRem</h2>
// <div>
//     <Link href={"/"}>
//     <NavLink>Home</NavLink>
//     </Link>
// <Link href={"/login"}>
// <NavLink> Login</NavLink>
//   </Link>

// <Link href={"/signup"}>
// <NavLink> Signup</NavLink>
//   </Link>
//     </div>
// </Navbar> 
  )
}
