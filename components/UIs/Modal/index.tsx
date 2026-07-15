'use client';
import React, { useRef } from "react";
//= Styles
import cls from "./modal.module.scss";

type Props = {
  children: React.ReactNode;
  setOpenModal: (open: boolean) => void;
  bigSize?: boolean;
  superSize?: boolean;
}

const Modal = ({ children, setOpenModal }: Props) => {
  const overlay = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (overlay.current === e.target) setOpenModal(false);
  };

  return (
    <div className={cls.overlay} ref={overlay} onClick={(e) => closeModal(e)}>
      <div className={`${cls.area}`}>
        <div className={cls.area__wrapper}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
