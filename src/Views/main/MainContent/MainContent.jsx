import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import _ from "lodash";

class MainContent extends Component {
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
      <div className={cn(align.full, align.topCenter, align.noMarginPad)}>
        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
            Main Content
          </Col>
        </Row>

        <Row
          className={cn(align.full, "py-2", align.noMarginPad, align.allCenter)}
        >
          <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
            <span className={cn("font-weight-bold", "text-1")}>
              Current Badges
            </span>
          </Col>
        </Row>

        <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
          <Col xs="12" className={cn(align.leftCenter, align.noMarginPad)}>
            {_.keys(eventsByToken).map((k, i) => {
              let evt = eventsByToken[k];
              return <EventBadge {...evt} key={i} />;
            })}
          </Col>
        </Row>
      </div>
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

export default MainContent;

// class MainContent extends Component {
//   render() {
//     return (
//       <div
//         className={cn(
//           align.full,
//           align.justCenter,
//           "flex-col",
//           align.noMarginPad
//         )}
//       >
//         <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
//           <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
//             <Badges />
//             <MainContainer />
//             <BUIDLHub />
//           </Col>
//         </Row>
//         <Row className={cn(align.full, align.noMarginPad, align.vCenter)}>
//           <p>Are you confused or did you encounter a bug?</p>
//           <p>Let us know!</p>
//         </Row>
//       </div>
//     );
//   }
