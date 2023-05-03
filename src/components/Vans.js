import React from 'react'

import NavBar from './NavBar'
import { vansData } from '../vanData'
import { Link } from 'react-router-dom'

export default function Vans() {

    const [vansCompo, setVansCompo] = React.useState("")




    React.useEffect(() => {

        setVansCompo(vansData.vans.map((van) => {
            let vanColor = ""
            switch (van.type) {
                case 'simple':
                    vanColor = '#E17654'
                    break;
                case 'rugged':
                    vanColor = '#115E59'
                    break;
                case 'luxury':
                    vanColor = '#161616'
            }
            return (
                <div className='van-card' key={van.id}>
                    <Link to={`/vans/${van.id}`} >
                        <img className='van-img' src={van.imageUrl} alt={van.name} ></img>
                        <h4 className='van-details' ><span className='van-name'>{van.name}</span> <span className='van-price' >{van.price}$<br></br><small className='per-day' >/day</small></span></h4>
                        <div className='van-type' style={{
                            backgroundColor: vanColor
                        }} >{van.type}</div>
                    </Link>

                </div>
            )
        }))


    }, [])

    return (
        <>
            <NavBar />
            <div className='van-page-content' >
                <h1 className='van-page-heading' >Explore our vans.</h1>
                <div className='van-gallery' >
                    {vansCompo}
                </div>
            </div>

        </>

    )
}