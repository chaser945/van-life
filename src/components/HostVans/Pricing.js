import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {

    const { van } = useOutletContext()

    return (
        <div className="host-van-pricing-wrapper" >
            <h2>${van.price}<span className="light-text">/day</span></h2>
        </div>
    )
}