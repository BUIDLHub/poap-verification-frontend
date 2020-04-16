import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import _ from "lodash";

import Badges from "./Badges";
import MainContainer from "./MainContainer";
import BUIDLHub from "./BUIDLHub";

export default class MainContent extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.needsInit) {
      setTimeout(() => {
        props.runInit();
      }, 1);
    }
    return {};
  }

  state = {};

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
          className={cn(align.full, align.noMarginPad, align.topCenter, "my-2")}
        >
          <Col xs="12" className={cn(align.topAlign, align.noMarginPad)}>
            <Badges {...this.props} />
            <MainContainer {...this.props} />
            <BUIDLHub {...this.props} />
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
