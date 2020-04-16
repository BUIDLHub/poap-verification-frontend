import React, { Fragment } from "react";
import { Button } from "reactstrap";
import cn from "classnames";

export default class EventTitle extends React.Component {
  render() {
    let { className, small, tiny, size } = this.props;

    if (small) {
      size = "sm";
    }
    if (tiny) {
      size = "xs";
    }
    if (!size) {
      size = "md";
    }

    return (
      <Fragment>
        <div
          onClick={this.props.onClick}
          className={cn(className, "button-event-title")}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
