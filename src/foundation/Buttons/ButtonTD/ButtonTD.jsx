// Author Yasir Kadhim
// 19/5/2022
// code for 3d button
import React from "react";
import PropTypes from "prop-types";
import "./ButtonTD.scss";
import { motion } from "framer-motion";
export default function ButtonTD({
  color,
  shadowColor,
  text,
  onClick,
  classes,
  about,
  textColor,
}) {
  return (
    <motion.span
      style={{
        backgroundColor: shadowColor,
      }}
      className={"ButtonTD-Span " + classes}
      transition={{
        delay: 0.95,
        duration: 0.4,
      }}
      initial={{
        y: 10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      <button
        className={"ButtonTD "}
        about={about}
        onClick={onClick}
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        {text}
      </button>
    </motion.span>
  );
}
ButtonTD.propTypes = {
  color: PropTypes.string,
  shadowColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  about: PropTypes.string,
  textColor: PropTypes.string,
};

ButtonTD.defaultProps = {
  color: "",
  shadowColor: "",
  text: "",
  onClick: () => {},
  classes: "",
  about: "",
  textColor: "",
};
