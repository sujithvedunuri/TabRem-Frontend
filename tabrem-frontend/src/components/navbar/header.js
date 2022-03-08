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
background: rgb(241, 236, 228);;
/* display: flex; */
/* justify-content: start; */
`

const Navb = styled.div`
display: flex;
justify-content: space-between;
`

const Logo = styled.div`
height: 80px;
width: 130px;
/* margin-top: -3px; */
padding-left: 40px;
padding-top: 10px;
cursor: pointer;
/* background-color: yellowgreen; */
`

const MenuItem = styled.a`
color:black;
padding-right :30px;
padding-top: 15px;
font-size: 18px;
text-decoration: none;
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
    <Image src={logo1}></Image>
    </Link>
      </Logo>

      <Menubox>
      <Link href={"/"} passHref>
      <MenuItem>Home</MenuItem>
      </Link>
      <Link href={"/features"} passHref>
      <MenuItem>Features</MenuItem>
      </Link>

      {isLoggedIn?<div></div>:
      <>
      <Link href={"/login"} passHref >
      <MenuItem>Login</MenuItem>
      </Link>
      <Link href={"/signup"} passHref>
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
