import React from 'react'

import NavBar from './NavBar'

export default function Vans(){

    React.useEffect(()=>{
        console.log("useEffect is working")
    },[])

    return(
        <>
            <NavBar />
            <h1>Vans page goes here.</h1>
        </>
        
    )
}