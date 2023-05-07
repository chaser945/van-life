import React from "react";
import { Link } from "react-router-dom";

import { vansData } from "../../vanData";

export default function HostVans() {

    const [vansArr, setVansArr] = React.useState([])
    const [vansHtml, setVansHtml] = React.useState("")

    React.useEffect(() => {
        const RandomVansArr = () => {
            const anArr = []
            let index = 0
            for (let i = 0; i < 3; i++) {
                anArr.push(vansData.vans[index])
                index++
            }
            return anArr
        }
        setVansArr(RandomVansArr())
    }, [])

    React.useEffect(() => {
        if (vansArr.length > 0) {
            setVansHtml(vansArr.map(van => {
                return (
                    <Link to={`/host/hostvans/${van.id}`}>
                        <div className="host-van-card" >
                            <img className="host-van-img" src={van.imageUrl} ></img>
                            <div className="host-van-content" >
                                <h3 className="host-van-name">{van.name}</h3>
                                <p className="host-van-price">${van.price}/day</p>
                            </div>
                        </div>
                    </Link>

                )
            }))
        }

    }, [vansArr])

    return (
        <>
            <div className="host-van-wrapper">
                <h1 className="listed-vans-h1" >Your listed vans</h1>
                {vansHtml ? vansHtml : <h1>Loading...</h1>}
            </div>


        </>

    )
}