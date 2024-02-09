// Modal.tsx
import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import Slider from "./Slider";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { Images } from "../../types/Images";

interface ModalProps {
  isOpen: boolean;
  lang: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  desc: PortableTextBlock[];
  price: number;
  images: Images[];
}

SwiperCore.use([Pagination]);

const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  desc,
  images,
  lang,
  price,
}) => {
  function closeModal() {
    setIsOpen(false);
  }
  const isRTL = lang === "arabic";

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          className={`relative z-50 ${isRTL ? "rtl" : "ltr"}`}
          as="div"
          onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel
                  className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ${
                    isRTL ? "text-right" : "text-left"
                  }`}>
                  <Slider images={images} />
                  <div className="mt-2">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className="text-sm text-gray-500 mt-2">
                      <PortableText value={desc || []} />
                    </div>
                    <p className="text-sm text-accent mt-2">${price}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      onClick={closeModal}>
                      {isRTL ? "اغلاق" : "Close"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
