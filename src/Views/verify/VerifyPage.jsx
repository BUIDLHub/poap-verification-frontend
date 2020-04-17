import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";
import Navbar from "./Navbar/Navbar";
import BUIDLHub from "Components/BUIDLHub";
import Footer from "../main/Footer";

import BugText from "Components/BugText";

import { ToastContainer } from "react-toastify";

export default class Verify extends React.Component {
  render() {
    return (
      <div
        className={cn(
          "main-landing",
          align.full,
          align.topCenter,
          align.noMarginPad
        )}
      >
        <Navbar {...this.props} />
        <ToastContainer />
        <Col xs="12" className={cn(align.vCenter, align.noMarginPad)}>
          <Row
            className={cn(
              align.full,
              align.noMarginPad,
              align.allCenter,
              "mt-2"
            )}
          >
            <Col xs="2" className={cn(align.allCenter, align.noMarginPad)} />
            <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
              Steps
            </Col>
            <Col xs="6" className={cn(align.allCenter, align.noMarginPad)}>
              Help Text
            </Col>
            <Col xs="2" className={cn(align.allCenter, align.noMarginPad)} />
          </Row>
          <BugText />
        </Col>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <Footer goTo={this.props.goTo} />
        </Col>
      </div>
    );
  }
}
