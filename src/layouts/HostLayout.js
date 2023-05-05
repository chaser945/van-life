import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { currentStyle } from "../components/NavBar";

export default function HostLayout() {
    return (
        <>
            <nav className="host-van-nav" >
                <ul>
                    <NavLink
                        style={({ isActive }) => isActive ? currentStyle : null}
                        to="/host"
                        end
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? currentStyle : null}
                        to="/host/income"
                    >
                        Income
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? currentStyle : null}
                        to="/host/hostvans"
                    >
                        Vans
                    </NavLink>
                    <NavLink
                        style={({ isActive }) => isActive ? currentStyle : null}
                        to="/host/reviews"
                    >
                        Reviews
                    </NavLink>
                </ul>
            </nav>

            <Outlet />
        </>

    )
}