import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import _ from "lodash";

import Badges from "./Badges";
import MainContainer from "./MainContainer";
import BUIDLHub from "./BUIDLHub";

export default class MainContent extends Component {
  

  render() {
    const { eventsByToken } = this.props;
    return (
      <div
        className={cn(
          align.full,
          align.justCenter,
          "flex-col",
          align.noMarginPad
        )}
      >
        <Row
          className={cn(align.full, align.noMarginPad, align.topCenter, "mt-5")}
        >
          <Col xs="12" className={cn(align.topAlign, align.noMarginPad)}>
            <Badges {...this.props} />
            <MainContainer {...this.props} />
            <BUIDLHub {...this.props} />
          </Col>
        </Row>
        <Row
          className={cn(align.full, align.noMarginPad, align.vCenter, "mt-5")}
        >
          <p className={cn("bug-text")}>
            Are you confused or did you encounter a bug?
          </p>
          <p className={cn("bug-text")}>
            <a href="/" rel="noopener noreferrer">
              Let us know!
            </a>
          </p>
        </Row>
      </div>
    );
  }
}
