// Author Yasir Kadhim
// 19/5/2022
// this code is for modal containers
// this will be used for any modal pop up
import "./Modal.scss";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { AiFillCloseCircle } from "react-icons/ai";
export default function Modal({
  children,
  showModal,
  hideModal,
  modalContainerAnimationClass,
  modalAnimationClass,
  modalContainerAnimationClassR,
  modalAnimationClassR,
  title,
  forceHide,
}) {
  const containerRef = useRef();
  const modalRef = useRef();
  const [buffer, setBuffer] = useState(false);

  function hideModalMiddleware() {
    modalRef.current.classList.remove(modalAnimationClass);
    containerRef.current.classList.add(modalContainerAnimationClassR);
    containerRef.current.classList.remove(modalContainerAnimationClass);
    modalRef.current.classList.add(modalAnimationClassR);

    setBuffer((old) => !old);

    containerRef.current.classList.remove(modalContainerAnimationClass);
    modalRef.current.classList.remove(modalAnimationClass);
    containerRef.current.addEventListener(
      "animationend",
      () => {
        containerRef.current.classList.remove("SigninModal-Container-Hidden");
        modalRef.current.classList.remove(modalAnimationClassR);
        hideModal();
      },
      { once: true }
    );
  }
  useEffect(() => {
    if (showModal === true) {
      containerRef.current.classList.add(modalContainerAnimationClass);
      modalRef.current.classList.add(modalAnimationClass);
    }
  }, [showModal]);
  useEffect(() => {
    if (forceHide) hideModalMiddleware();
  }, [forceHide]);

  return !showModal ? (
    <></>
  ) : (
    <div
      className={"Modal-Container "}
      id="Modal-Container"
      onClick={(e) => {
        if (e.target === containerRef.current) {
          hideModalMiddleware();
        }
      }}
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div ref={modalRef} className="Modal" style={{}}>
        <AiFillCloseCircle
          className="Modal-Exit"
          onClick={() => hideModalMiddleware()}
        />
        <h1 className="bgh2 ModalTitle">{title}</h1>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalContainerAnimationClass: PropTypes.string,
  modalAnimationClass: PropTypes.string,
  modalContainerAnimationClassR: PropTypes.string,
  modalAnimationClassR: PropTypes.string,
  title: PropTypes.string,
  forceHide: PropTypes.bool,
};
Modal.defaultProps = {
  backgroundColor: "rgba(0,0,0,0.5)",
  modalColor: "white",
  widthClamp: "300px,50vw,1000px",
  heightClamp: "300px,75vh,1000px",
  title: "",
  blurBackground: true,
  forceHide: false,
};
