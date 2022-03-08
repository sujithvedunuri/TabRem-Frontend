import React, { useEffect } from 'react'

export default function Features() {

// useEffect(()=>{
// var data = fetch("http://localhost:8080/getMedicines",
// {
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json'}}).catch((er)=>{
//   console.log(er);
// }).then((res) =>{
//   console.log(res)
// })

// },[]);

  return (
    <>
   <h1>
       features
    </h1>
    <a href="/api/auth/logout">Logout</a>
    </>
  )
}
