import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import {
    Container,
    Accordion,
    Col,
    Row,
    Table,
    Card,
    Tab,
} from "react-bootstrap";
import NavbarComponent from "../Header/NavbarComponent";
import SellerSearchComponent from "./SellerSearchComponent";

const SellerDetailComponent = () => {
    // const sellerListGenerateFunction = () => {
    //     return state.map((list) => {
    //         return (
    //             <tr key={list.id}>
    //                 <td>{list.name}</td>
    //                 <td>{list.product}</td>
    //                 <td>{list.location}</td>
    //                 <td>{list.city}</td>
    //                 <td>{list.country}</td>
    //                 <td>
    //                     <Button
    //                         onClick={() =>
    //                             (window.location.href = `/seller/${list.id}`)
    //                         }
    //                     >
    //                         Book
    //                     </Button>
    //                 </td>
    //             </tr>
    //         );
    //     });
    // };
    return (
        <Container className="mt-5">
            <Row className="jumbotron">
                <Col md={12}>
                    <Card>
                        <Card.Header>
                            <h1>Stationary Kings</h1>
                            <p>Product:Stationary</p>
                            <p>Location:Karachi</p>
                            <p>City:Karachi</p>
                            <p>Country:Pakistan</p>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <tr>
                                    <th>WednesDay - 11-November-2021</th>
                                </tr>
                                <tr>
                                    <td>01:00 PM</td>
                                    <td>03:00 PM</td>
                                    <td>06:00 PM</td>
                                    <td>08:00 PM</td>
                                </tr>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SellerDetailComponent;
