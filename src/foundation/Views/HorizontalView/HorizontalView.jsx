// Vertical view will layout children in a vertical manner
// Prop-types are laid down
// 16-5-2022 Yasir Kadhim

import React from "react";
import PropTypes from "prop-types";
import "./HorizontalView.scss";
export default function HorizontalView({
  BackgroundColor,
  AlignCenter,
  AlignLeft,
  AlignRight,
  children,
  justifyContent,
  classes,
  padding,
}) {
  return (
    <div
      style={{
        backgroundColor: BackgroundColor,
        alignItems: AlignLeft
          ? "flex-start"
          : AlignRight
          ? "flex-end"
          : AlignCenter
          ? "center"
          : "center",
        justifyContent: justifyContent,
        padding: padding,
      }}
      className={"HorizontalView " + classes}
    >
      {children}
    </div>
  );
}

HorizontalView.propTypes = {
  BackgroundColor: PropTypes.string,
  AlignCenter: PropTypes.bool,
  AlignLeft: PropTypes.bool,
  AlignRight: PropTypes.bool,
  classes: PropTypes.string,
  justifyContent: PropTypes.string,
  padding: PropTypes.string,
};

HorizontalView.defaultProps = {
  BackgroundColor: "#ffffff00",
  AlignCenter: true,
  AlignLeft: false,
  AlignRight: false,
  classes: "",
  justifyContent: "",
  padding: "0px",
};
