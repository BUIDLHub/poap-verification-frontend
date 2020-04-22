import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import Badges from "./Badges";
import Shell from '../Shell';
import Header from '../Header';

export default class BadgesMain extends Component {
  render() {

    return (
      <Shell history={this.props.history}>
        <div className={cn(align.full, align.topLeft, align.noMarginPad)}>
            <Row className={cn(align.full, align.noMarginPad, align.topLeft)}>
                <Col xs="12" className={cn(align.topLeft, align.noMarginPad)}>
                  <Header />
                </Col>
            </Row>
            <Badges {...this.props} />
        </div>
        
      </Shell>
    );
  }
}
