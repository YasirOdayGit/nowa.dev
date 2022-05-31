// author Yasir Kadhim
// 18/5/2022
// Code for navigation bar
// Props will be laid down
// This class accepts utility classes
// Utility classes can be found in Foundation/Utility

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./NavigationBar.scss";
export default function NavigationBar({
  logo = null,
  children,
  disappearing = false,
  glass = false,
  dropShadowOnScroll = false,
  className = "",
  backgroundColor = "white",
  height = "50px",
  padding = "10px 20px",
  noBackgroundColorFixed = false,
}) {
  const navBarRef = useRef();
  let oldScrollY = 0;

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        if (dropShadowOnScroll) {
          navBarRef.current.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.1)";
        }
        if (noBackgroundColorFixed) {
          navBarRef.current.style.backgroundColor = backgroundColor;
        }
        if (glass) {
          //   document.getElementById("").classList.add
          navBarRef.current.classList.add("nvg");
        }
      } else {
        if (dropShadowOnScroll) {
          navBarRef.current.style.boxShadow = "0 4px rgba(0, 0, 0, 0)";
        }
        if (noBackgroundColorFixed) {
          navBarRef.current.style.backgroundColor = "transparent";
        }
        if (glass) {
          navBarRef.current.classList.remove("nvg");
        }
      }
      if (disappearing && window.scrollY > oldScrollY) {
        navBarRef.current.style.top = "-" + height;
        //   remove the boxshadow just in case
        navBarRef.current.style.boxShadow = "0 4px rgba(0, 0, 0, 0)";
      } else {
        navBarRef.current.style.top = "0px";
      }
      oldScrollY = window.scrollY;
    }
    if (disappearing || dropShadowOnScroll || noBackgroundColorFixed) {
      window.addEventListener("scroll", handleScroll);
    }
    //   disponse
    return () => {
      if (disappearing || dropShadowOnScroll || noBackgroundColorFixed) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [disappearing, dropShadowOnScroll, noBackgroundColorFixed]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <div
      className={"NavigationBar " + className}
      ref={navBarRef}
      style={{
        backgroundColor: noBackgroundColorFixed ? null : backgroundColor,
        height: height,
      }}
    >
      <div
        className="NavigationBarC"
        style={{
          padding: padding,
        }}
      >
        <div className="NavigationBar-Logo">{logo}</div>
        <ul className="NavigationBar-Items">
          {!children
            ? null
            : children.map((item, index) => {
                return (
                  <li className="NavigationBar-Item" key={index}>
                    {item}
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}
NavigationBar.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.array,
  disappearing: PropTypes.bool,
  glass: PropTypes.bool,
  dropShadowOnScroll: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  noBackgroundColorFixed: PropTypes.bool,
};
