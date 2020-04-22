import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import { Icon } from "Components/icons";
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
    const { loading, eventsByToken, goToBadge } = this.props;

    return (
      <div
        className={cn(align.full, align.topCenter, "py-2", align.noMarginPad)}
      >
        <Row
          className={cn(align.full, "pt-4", align.noMarginPad, align.allCenter)}
        >
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            {loading && (
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                <Icon className={cn("fa-spinner fa-spin")} />
                <span className={cn("font-weight-light", "text-1", "pl-2")}>
                  loading...
                </span>
              </div>
            )}
            {!loading && (
              <div
                className={cn(align.full, align.allCenter, align.noMarginPad)}
              >
                {_.keys(eventsByToken).map((k, i) => {
                  let evt = eventsByToken[k];
                  return (
                    <EventBadge
                      {...evt}
                      goToBadge={() => {
                        goToBadge(evt, k);
                      }}
                      key={i}
                    />
                  );
                })}
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const EventBadge = (props) => {
  return (
    <Col xs="3" className={cn(align.topCenter, align.noMarginPad, "px-1")}>
      <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
        <div
          className={cn(align.allCenter, align.noMarginPad, "clickable")}
          onClick={props.goToBadge}
        >
          <img
            src={props.image_url}
            className={cn("badges-img", "hover-effect")}
            alt="badge"
          />
        </div>
        <p className={cn("badge-name", "mt-1")}>Badge Name</p>
      </div>
    </Col>
  );
};
