import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface GameModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const GameModal = ({ children, isOpen }: GameModalProps) => {
  const modalRoot = document.getElementById("modal-message");
  if (!modalRoot) return null;
  if (!isOpen) return null;

  return createPortal(
    <div>{children}</div>,
    modalRoot
  );
};

export default GameModal;
