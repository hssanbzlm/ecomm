import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ModalComponent({ children }) {
  const elRef = useRef(null);
  const div = document.createElement("div");
  elRef.current = div;
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
}

export default ModalComponent;
