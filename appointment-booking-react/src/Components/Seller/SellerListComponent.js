import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Container, Accordion, Col, Row, Table } from "react-bootstrap";
import NavbarComponent from "../Header/NavbarComponent";
import SellerSearchComponent from "./SellerSearchComponent";

const SellerComponentList = () => {
    const [state, setState] = useState([
        {
            id: 1,
            name: "Tawal Builder",
            product: "grocery",
            location: "gulshan",
            city: "karachi",
            country: "pakistan",
        },
        {
            id: 2,
            name: "Stationary Kings",
            product: "Stationary",
            location: "gulshan",
            city: "karachi",
            country: "pakistan",
        },
    ]);
    const sellerListGenerateFunction = () => {
        return state.map((list) => {
            return (
                <tr key={list.id}>
                    <td>{list.name}</td>
                    <td>{list.product}</td>
                    <td>{list.location}</td>
                    <td>{list.city}</td>
                    <td>{list.country}</td>
                    <td>
                        <Button
                            onClick={() =>
                                (window.location.href = `/seller/${list.id}`)
                            }
                        >
                            Book
                        </Button>
                    </td>
                </tr>
            );
        });
    };
    return (
        <Container className="mt-5">
            <Row className="jumbotron">
                <Col>
                    <Table responsive hover>
                        <thead>
                            {" "}
                            <tr>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Location</th>
                                <th>City</th>
                                <th>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{sellerListGenerateFunction()}</tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default SellerComponentList;
