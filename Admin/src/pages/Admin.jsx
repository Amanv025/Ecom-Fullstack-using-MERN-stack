import React from "react";
import Sidebar from "../components/Sidebar";
import { Routes,Route } from "react-router-dom";
import Addproduct from "../components/Addproduct";
import Listproduct from "../components/Listproduct";
const Admin=() =>{
    return(
        <div className="lg:flex">
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<Addproduct />}/>
                <Route path='/listproduct' element={<Listproduct />}/>
            </Routes>
        </div>
    )
}

export default Admin;