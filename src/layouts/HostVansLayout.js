import React from "react";
import { useParams, NavLink } from "react-router-dom";

import { vansData } from "../vanData";

export default function HostVansLayout() {
    const index = useParams().id - 1;
    const [van, setVan] = React.useState("")

    React.useEffect(() => {
        setVan(vansData.vans[index])
    }, [])

    return (
        <>
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
                    <NavLink>Details</NavLink>
                    <NavLink>Pricing</NavLink>
                    <NavLink>Photos</NavLink>
                </ul>
            </nav>
        </>
    )
}