import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import Button from "Components/Buttons/EventTitle";
import { Row, Col } from "reactstrap";
import _ from "lodash";

export default class Badges extends React.Component {
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
      <Col xs="2" className={cn("col-xs")}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col
            xs="12"
            className={cn(align.leftCenter, align.noMarginPad, "yourbadges")}
          >
            <p className={cn("yourbadges", "ml-5")}>Your badges:</p>
          </Col>
          <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
            {_.keys(eventsByToken).map((k, i) => {
              let evt = eventsByToken[k];
              return <EventBadge {...evt} key={i} />;
            })}
          </Col>
        </Row>
      </Col>
    );
  }
}

const EventBadge = (props) => {
  return (
    <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
      <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
        <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
          <img src={props.image_url} height="80" alt="badge" />
        </Col>
      </Row>
    </div>
  );
};
