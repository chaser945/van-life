import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { vansData } from "../vanData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VansDetails() {

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
                    <Link to="/vans"><button className="btn van-details-btn" > ← Go back to vans page</button></Link>
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