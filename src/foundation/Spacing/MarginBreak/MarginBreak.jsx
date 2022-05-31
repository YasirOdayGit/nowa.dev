// Marginbreak will apply margin between components
// Prop-types are laid down
// 16-5-2022 Yasir Kadhim

import React from "react";
import PropTypes from "prop-types";
export default function MarginBreak({ margin = "20px" }) {
  return <div style={{ margin: margin }}></div>;
}
MarginBreak.propTypes = {
  margin: PropTypes.string,
};
