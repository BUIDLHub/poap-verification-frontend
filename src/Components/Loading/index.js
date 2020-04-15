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

    console.log("Loading");

    return (
      <Fragment>
        <div className={cn("preloader embedded", align.allCenter, size)}>
          <span className={cn(size, align.allCenter)}>
            <Icon className="fa fa-spinner fa-spin" />
          </span>
        </div>
        {status && (
          <div className={cn("d-block text-center", align.full)}>
            <span className={cn("load-status", align.full, "text-center")}>
              {status}
            </span>
          </div>
        )}
      </Fragment>
    );
  }
}
