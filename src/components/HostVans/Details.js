import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {
    const { van } = useOutletContext()
    return (
        <div className="host-van-details-wrapper">
            <p><span className="bold">Name: </span>{van.name}</p>
            <p className="host-van-details-category" ><span className="bold">Category: </span>{van.type}</p>
            <p><span className="bold">Description: </span>{van.description}</p>
            <p><span className="bold">Visibility: </span>Public</p>
        </div>
    )
}