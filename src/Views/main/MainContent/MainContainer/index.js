import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

import ContainerHeader from "./ContainerHeader";
import TableTitles from "./TableTitles";
import JoinHere from "./JoinHere";
import Roles from "./Roles";
import Divider from "./TableDivider";

export default class MainContainer extends React.Component {
  render() {
    return (
      <Col xs="8" className={cn("col-xs-pull-6")}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="10" className={cn(align.allCenter, align.noMarginPad)}>
            <div
              className={cn(
                align.full,
                align.topCenter,
                align.noMarginPad,
                "maincontainer"
              )}
            >
              <ContainerHeader />
              <TableTitles />
              <Divider />
              <Row
                className={cn(align.full, align.noMarginPad, align.topAlign)}
              >
                <Col xs="2" className={cn(align.noMarginPad)}>
                  <p>Badges</p>
                </Col>
                <Col xs="4" className={cn(align.noMarginPad)}>
                  <JoinHere />
                </Col>
                <Col xs="4" className={cn(align.noMarginPad)}>
                  <Roles />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}
