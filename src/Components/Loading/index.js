import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import {Icon} from "Components/icons";

export default class LoadingOverlay extends React.Component {
  render() {
    let { loading, status, size, small } = this.props;

    if (!loading) {
      return null;
    }

    if (small) {
      size = "small";
    }

    return (
      <div className={cn("loading-overlay", align.full, align.topCenter, align.noMarginPad)}>
        <div className={cn( "preloader","embedded",align.topCenter, size)}>
          <span className={cn(size, align.allCenter)}>
            <Icon className="fa fa-spinner fa-spin" />
          </span>
        </div>
        {status && (
          <div className={cn("load-status", align.full, align.allCenter)}>
            {status}
          </div>
        )}
      </div>
    );
  }
}
