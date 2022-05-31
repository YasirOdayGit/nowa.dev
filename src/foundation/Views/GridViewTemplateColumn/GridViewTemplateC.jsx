// Author Yasir Kadhim
// 19/5/2022
//Props are laid down
// this accepts classes
import React from "react";
import PropTypes from "prop-types";
export default function GridViewTemplateC({ children, template, classes }) {
  return (
    <div
      className={"GridViewTemplateC " + classes}
      style={{ gridTemplateColumns: template, display: "grid", width: "100%" }}
    >
      {children}
    </div>
  );
}
GridViewTemplateC.propTypes = {
  template: PropTypes.string,
  classes: PropTypes.string,
};

GridViewTemplateC.defaultProps = {
  template: "1fr",
  classes: "",
};
