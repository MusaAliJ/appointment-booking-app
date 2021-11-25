import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import DashboardComponent from "./Dashboard/DashboardComponent";
import SellerDetailComponent from "./Seller/SellerDetailComponent";

const MainComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardComponent />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
            <Route path="/">
                <Route path="/seller/:id" element={<SellerDetailComponent />} />
            </Route>
        </Routes>
    );
};

export default MainComponent;
