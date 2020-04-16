import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";

import Logo from "Assets/images/BUIDLHublogo.svg";

export default class BUIDLHub extends React.Component {
  render() {
    return (
      <Col xs="2" className={cn("col-xs-push-12")}>
        <div className={cn(align.full, align.vCenter, align.noMarginPad)}>
          <Col xs="12" className={cn(align.rightCenter, align.noMarginPad)}>
            <p className={cn("poweredby")}>Powered by:</p>
          </Col>
          <Col xs="12" className={cn(align.rightCenter, align.noMarginPad)}>
            <img className={cn("buidlhub-logo")} src={Logo} alt="BUIDLHub" />
          </Col>
        </div>
      </Col>
    );
  }
}
