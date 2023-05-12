import React from "react";

import { vansData } from "../vanData";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VansDetails() {

    const location = useLocation()
    const type = location.state.type
    // console.log(location.state.type)

    const param = useParams()
    const index = param.id - 1
    const [vans, setVans] = React.useState("")
    const [vanColor, setVanColor] = React.useState("")

    React.useEffect(() => {
        setVans(vansData.vans)


    }, [])

    React.useEffect(() => {
        if (vans) {
            switch (vans[index].type) {
                case 'simple':
                    setVanColor('#E17654')
                    break;
                case 'rugged':
                    setVanColor('#115E59')
                    break;
                case 'luxury':
                    setVanColor('#161616')
            }
        }

    }, [vans])


    return (
        <>

            {vans ? (
                <div className="van-detail-card" >
                    <Link to={`..?${location.state.search.toString()}`} relative="path"><div className="van-details-btn"><span>&larr;</span><button className="back-btn">Go back to {type ? type : "all"} vans</button></div></Link>
                    <img src={vans[index].imageUrl} alt={vans[index].name} ></img>
                    <span style={{ backgroundColor: vanColor }} className="van-details-type" >{vans[index].type}</span>
                    <h1>{vans[index].name}</h1>
                    <h3>${vans[index].price}<span className="per-day" >/day</span></h3>
                    <p>{vans[index].description}</p>
                    <button className="btn home-btn vd-btn">Rent this van</button>
                </div>
            ) : <div className="loading-div">
                <h1>Loading...</h1>
            </div>}


        </>


    )
}