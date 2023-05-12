import React from 'react'

import { vansData } from '../vanData'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans() {

    const [vansCompo, setVansCompo] = React.useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const filterType = searchParams.get('type')



    React.useEffect(() => {

        const filteredVans = filterType ? vansData.vans.filter(van => van.type === filterType) : vansData.vans

        setVansCompo(filteredVans.map((van) => {
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
                    <Link to={`/vans/${van.id}`} state={{ search: searchParams, type: filterType }}>
                        <img className='van-img' src={van.imageUrl} alt={van.name} ></img>
                        <h4 className='van-details' ><span className='van-name'>{van.name}</span> <span className='van-price' >{van.price}$<br></br><small className='per-day' >/day</small></span></h4>
                        <div className='van-type' style={{
                            backgroundColor: vanColor
                        }} >{van.type}</div>
                    </Link>

                </div>
            )
        }))


    }, [searchParams])

    return (
        <>
            <div className='van-page-content' >
                <h1 className='van-page-heading' >Explore our vans options.</h1>
                <div className='vans-buttons-wrapper'>
                    <button onClick={() => setSearchParams({ type: 'simple' })} className={`van-page-btn ${filterType === 'simple' ? "selected-simple" : ""}`} >Simple</button>
                    <button onClick={() => setSearchParams({ type: 'luxury' })} className={`van-page-btn ${filterType === 'luxury' ? "selected-luxury" : ""}`} >Luxury</button>
                    <button onClick={() => setSearchParams({ type: 'rugged' })} className={`van-page-btn ${filterType === 'rugged' ? "selected-rugged" : ""}`} >Rugged</button>
                    {filterType ? <button onClick={() => setSearchParams("")} className='clear-btn'>Clear filters</button> : null}

                </div>

                <div className='van-gallery' >
                    {vansCompo}
                </div>
            </div>
        </>

    )
}