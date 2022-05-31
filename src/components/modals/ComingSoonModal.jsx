import React, { useState } from "react";
import { Modal, VerticalView } from "../../foundation";
import PropTypes from "prop-types";
export default function ComingSoonModal({
  value = false,
  callback = () => null,
}) {
  const [showModal, setShowModal] = useState(false);
  const [forceHide, setForceHide] = useState(false);
  return (
    <Modal
      hideModal={() => callback(false)}
      showModal={value}
      forceHide={forceHide}
      modalAnimationClass="ami"
      modalAnimationClassR="amo"
      modalContainerAnimationClass="amci"
      modalContainerAnimationClassR="amco"
    >
      <VerticalView classes="h100 w100">
        <h1>Coming soon</h1>
      </VerticalView>
    </Modal>
  );
}
ComingSoonModal.propTypes = {
  value: PropTypes.bool,
  callback: PropTypes.func,
};
