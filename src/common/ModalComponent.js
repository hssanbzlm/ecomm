import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function ModalComponent({ children }) {
  const div = document.createElement("div");
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(div);
    return () => modalRoot.removeChild(div);
  });

  return createPortal(<div>{children}</div>, div);
}

export default ModalComponent;
