import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cn from "classnames";
import * as align from "Constants/alignments";

export const Icon = (props) => {
  let parts = props.className.split(" ");
  let fa = parts.filter((p) => p.startsWith("fa-"));
  let spin = fa.filter((f) => f.startsWith("fa-spin"))[0];
  let pulse = fa.filter((f) => f.startsWith("fa-pulse"))[0];
  let fixedWidth = fa.filter((f) => f === "fa-fw")[0];
  fa = fa.filter(
    (f) => f !== "fa-spin" && f !== "fa-pulse" && f !== "fa-fw"
  )[0];
  if (spin) {
    spin = true;
  }
  if (pulse) {
    pulse = true;
  }
  if (fixedWidth) {
    fixedWidth = true;
  }
  let iconSet = parts.filter((p) => p === "fas" || p === "fab" || p === "fa");
  let set = "fas";
  if (iconSet.indexOf("fab") >= 0) {
    set = "fab";
  }

  let className = parts
    .filter(
      (p) => !p.startsWith("fa-") && p !== "fa" && p !== "fas" && p !== "fab"
    )
    .join(" ");
  if (fa) {
    //remove 'fa-' part
    fa = fa.substring(3);
    return (
      <i
        className={cn(className + " " + fa, align.allCenter, align.noMarginPad)}
        onClick={props.onClick}
      >
        <FontAwesomeIcon
          icon={[set, fa]}
          spin={spin}
          fixedWidth={fixedWidth}
          pulse={pulse}
        />
      </i>
    );
  } else {
    return <i className={props.className} onClick={props.onClick} />;
  }
};

export const LayeredIcon = (props) => {
  return <span className={"fa-layers fa-fw"}>{props.children}</span>;
};

export const IconBuilder = (props) => {
  if (!props.icon) {
    return null;
  }

  if (typeof props.icon !== "string") {
    return props.icon;
  }

  let icClass = props.icon;
  let classes = icClass.split(",");

  let icon = null;
  if (classes.length > 1) {
    icon = (
      <div
        className={cn(
          align.allCenter,
          props.className,
          "fa-layers",
          "fa-fw",
          align.noMarginPad
        )}
      >
        {classes.map((c, i) => {
          return <Icon key={i} className={cn(c)} />;
        })}
      </div>
    );
  } else {
    icon = (
      <div
        className={cn(
          align.allCenter,
          props.className,
          "fa-layers",
          "fa-fw",
          align.noMarginPad
        )}
      >
        <Icon className={cn(classes[0], props.className)} />
      </div>
    );
  }
  return icon;
};
