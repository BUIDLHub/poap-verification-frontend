import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import MainContent from "./MainContent";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";

export default class Main extends Component {
  render() {
    console.log("In main");

    let padding = cn("px-3", "px-md-5", "py-3");
    return (
      <div
        className={cn(
          "main-landing",
          // "bg-white",
          align.full,
          align.topCenter,
          align.noMarginPad
        )}
      >
        <Navbar {...this.props} />
        <ToastContainer />
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <MainContent {...this.props} />
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Footer goTo={this.props.goTo} />
          </Col>
        </Row>
      </div>
    );
  }
}
