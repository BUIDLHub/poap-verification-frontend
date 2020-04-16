import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";

import ContainerHeader from "./ContainerHeader";
import TableTitles from "./TableTitles";

const Divider = () => {
  return (
    <React.Fragment>
      <div
        className={cn(
          align.full,
          align.allCenter,
          align.noMarginPad,
          "divider-border"
        )}
      />
    </React.Fragment>
  );
};

export default class MainContainer extends React.Component {
  render() {
    return (
      <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
        <ContainerHeader />
        <TableTitles />
        {/* Divider */}
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
    );
  }
}
