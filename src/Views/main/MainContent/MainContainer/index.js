import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

import ContainerHeader from "./ContainerHeader";
import TableTitles from "./TableTitles";

export default class MainContainer extends React.Component {
  render() {
    return (
      <Col xs="8" className={cn("col-xs-pull-6")}>
        <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
          <ContainerHeader />
          <TableTitles />
          <hr />
          <Col xs="3" className={cn(align.allCenter, align.noMarginPad)}>
            <p>Logo</p>
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <p>Server Join</p>
          </Col>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            <p>Roles</p>
          </Col>
        </div>
      </Col>
    );
  }
}
