import React from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";

import { vansData } from "../vanData";

export default function HostVansLayout() {
    const index = useParams().id - 1;
    const [van, setVan] = React.useState("")

    React.useEffect(() => {
        setVan(vansData.vans[index])
    }, [])

    return (
        <div>
            <Link to=".." relative="path"><div className="host-vans-btn">
                <span>&larr;</span><button className="back-btn " >Back to all vans</button>
            </div></Link>
            {van ? (
                <div className="host-vans-container" >
                    <div className="host-van-card-info" >

                        <img className="host-van-img-info" src={van.imageUrl} ></img>
                        <div className="host-van-content-info" >
                            <div style={{
                                backgroundColor: van.type === 'luxury' ? '#161616'
                                    : van.type === 'rugged' ? '#115E59' : '#E17654'
                            }}
                                className="host-van-type-info" >
                                {van.type}
                            </div>
                            <h3 className="host-van-name-info">{van.name}</h3>
                            <p className="host-van-price-info"><strong>${van.price}</strong>/day</p>
                        </div>
                    </div>

                    <nav>
                        <ul>
                            <NavLink
                                end
                                style={({ isActive }) => isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : null}
                                to={`/host/hostvans/${index + 1}`} >Details</NavLink>
                            <NavLink
                                style={({ isActive }) => isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : null}
                                to={`/host/hostvans/${index + 1}/pricing`}>Pricing</NavLink>
                            <NavLink
                                style={({ isActive }) => isActive ? { textDecoration: 'underline', fontWeight: 'bold' } : null}
                                to={`/host/hostvans/${index + 1}/photos`}>Photos</NavLink>
                        </ul>
                    </nav>

                    <Outlet context={{ van }} />
                </div>
            ) : <h1> Loading...</h1>}


        </div>
    )
}