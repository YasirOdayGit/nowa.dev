// Horizontal view will layout children in a Horizontal manner
// Prop-types are laid down
// 16-5-2022 Yasir Kadhim

import React from "react";
import PropTypes from "prop-types";
import "./VerticalView.scss";
export default function VerticalView({
  BackgroundColor,
  AlignCenter,
  AlignLeft,
  AlignRight,
  children,
  padding,
  justifyContent,
  classes,
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
      className={"VerticalView " + classes}
    >
      {children}
    </div>
  );
}

VerticalView.propTypes = {
  BackgroundColor: PropTypes.string,
  AlignCenter: PropTypes.bool,
  AlignLeft: PropTypes.bool,
  AlignRight: PropTypes.bool,
  padding: PropTypes.string,
  justifyContent: PropTypes.string,
  classes: PropTypes.string,
};

VerticalView.defaultProps = {
  BackgroundColor: "transparent",
  AlignCenter: true,
  AlignLeft: false,
  AlignRight: false,
  padding: "20px",
  justifyContent: "center",
  classes: "",
};
