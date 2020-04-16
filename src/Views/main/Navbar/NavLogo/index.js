import React, { Fragment } from "react";
import cn from "classnames";
import * as align from "Constants/alignments";
import logo from "Assets/images/POAPLogo.svg";

const NavLogo = () => {
  return (
    <Fragment>
      <div className={cn(align.full, align.allCenter, align.noMarginPad)}>
        <img src={logo} alt="POAP Logo" className={cn("navlogo")} />
      </div>
    </Fragment>
  );
};

export default NavLogo;
