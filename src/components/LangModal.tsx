// components/Modal.tsx
import React, { ReactNode } from "react";
import { Transition } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  position: "below" | "above";
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  children,
  position,
}) => {
  const modalPosition = position === "below" ? "top-full" : "bottom-full";

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="relative shadow-lg">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div
            className={`absolute ${modalPosition} -left-10 shadow-xl mx-auto bg-white p-3 rounded-md`}>
            {children}
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
};

export default Modal;
