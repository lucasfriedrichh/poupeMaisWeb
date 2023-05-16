import Header from "../../components/Header";
import Footer from "../../components/Footer";

import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  Table,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import './style.css'

export default function DashboardPage() {
    return (
        <>
            <Header />
            <div className="content-elevated">
                <Col lg="6" md="12">
                <Card className="card-tasks">
                <CardHeader>
                    <h6 className="title d-inline">Wish List</h6>
                </CardHeader>
                <CardBody>
                    <div className="table-full-width table-responsive">
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                            <FormGroup check>
                                <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                    <span className="check" />
                                </span>
                                </Label>
                            </FormGroup>
                            </td>
                            <td>
                            <p className="title">Update the Documentation</p>
                            <p className="text-muted">
                                Dwuamish Head, Seattle, WA 8:47 AM
                            </p>
                            </td>
                            <td className="td-actions text-right">
                            <Button
                                color="link"
                                id="tooltip636901683"
                                title=""
                                type="button"
                            >
                                <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                                delay={0}
                                target="tooltip636901683"
                                placement="right"
                            >
                                Edit Task
                            </UncontrolledTooltip>
                            </td>
                        </tr>       
                        </tbody>
                    </Table>
                    </div>
                </CardBody>
                </Card>
            </Col>   
            </div>
            <Footer />
        </>
    );
}