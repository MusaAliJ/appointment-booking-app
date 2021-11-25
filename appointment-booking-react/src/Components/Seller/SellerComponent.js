import React from "react";
import NavbarComponent from "../Header/NavbarComponent";
import SellerComponentList from "./SellerListComponent";
import SellerSearchComponent from "./SellerSearchComponent";

const SellerComponent = () => {
    return (
        <>
            <SellerSearchComponent />
            <SellerComponentList />
        </>
    );
};

export default SellerComponent;
