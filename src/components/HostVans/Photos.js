import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {

    const { van } = useOutletContext()

    return (
        <div className="host-van-photos-wrapper" >
            <img className="host-van-photos-img" src={van.imageUrl} alt={van.name}></img>
        </div>
    )
}