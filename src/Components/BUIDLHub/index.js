import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import "./BUIDLHub.scss";
import Logo from "Assets/images/BUIDLHublogo.svg";

export default class BUIDLHub extends React.Component {
  render() {
    return (
      <div className={cn(align.full, "px-3", align.topCenter, align.noMarginPad)}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.rightCenter, align.noMarginPad)}>
            <p className={cn("poweredby")}>Powered by:</p>
          </Col>
        </Row>
        <Row className={cn(align.full,  align.allCenter)}>
          <Col xs="12" className={cn("buidlhub-logo-container", align.rightCenter, align.noMarginPad)}>
            <img className={cn("buidlhub-logo")} src={Logo} alt="BUIDLHub" />
          </Col>
        </Row>
      </div>
      
    );
  }
}
