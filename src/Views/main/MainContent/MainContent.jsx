import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";

import Badges from "./Badges";
import BUIDLHub from "./BUIDLHub";
import MainContainer from "./MainContainer";

class MainContent extends Component {
  render() {
    return (
      <div
        className={cn(
          align.full,
          align.justCenter,
          "flex-col",
          align.noMarginPad
        )}
      >
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <Badges />
            <MainContainer />
            <BUIDLHub />
          </Col>
        </Row>
        <Row className={cn(align.full, align.noMarginPad, align.vCenter)}>
          <p>Are you confused or did you encounter a bug?</p>
          <p>Let us know!</p>
        </Row>
      </div>
    );
  }
}

export default MainContent;
