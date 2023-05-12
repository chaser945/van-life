import "./styles.css";
import React from "react";

import HomeLayout from "./layouts/HomeLayout";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Vans from "./components/Vans.js";
import VansDetails from "./components/VansDetails";

import HostLayout from "./layouts/HostLayout";
import Dashboard from "./components/Host/Dashboard";
import Income from "./components/Host/Income";
import Reviews from "./components/Host/Reviews";
import HostVans from "./components/Host/HostVans";

import HostVansLayout from "./layouts/HostVansLayout";
import Details from "./components/HostVans/Details";
import Pricing from "./components/HostVans/Pricing";
import Photos from "./components/HostVans/Photos";


import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";



export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VansDetails />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="hostvans" element={<HostVans />} />
        <Route path="hostvans/:id" element={<HostVansLayout />}>
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>
    </Route>))

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
