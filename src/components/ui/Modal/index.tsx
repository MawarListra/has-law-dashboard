import React from "react";
import OffCanvasOverlay from "../OffCanvasOverlay";

import CloseIcon from "../Icons/close-icon";

import type { ModalProps } from "./types";

function Modal({
  children,
  open = false,
  maskClosable = false,
  Header,
  Footer,
  onClose,
}: ModalProps) {
  return (
    <React.Fragment>
      {open && (
        <div
          onClick={() => {
            if (maskClosable && onClose) onClose();
          }}
        >
          <div className="fixed inset-0 z-20 m-4 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div
              onClick={(e) => e.stopPropagation()}
              className=" relative mx-auto w-full max-w-4xl"
            >
              <div className="relative flex w-full flex-col rounded-3xl border-0 bg-[#f7f8fa] shadow-lg outline-none focus:outline-none">
                {/* MODAL HEADER */}
                <div className="flex items-center justify-between rounded-t p-6">
                  {Header}

                  <div className="float-right ml-auto flex">
                    <button type="button" className="ml-6" onClick={onClose}>
                      <CloseIcon />
                      <span className="sr-only">Close Modal</span>
                    </button>
                  </div>
                </div>

                {/* MODAL BODY */}
                <div className="relative flex-auto px-6 pb-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <OffCanvasOverlay active={open} />
    </React.Fragment>
  );
}

// export function ModalFooter() {
//   return (
//     <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
//       <button
//         className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
//         type="button"
//       >
//         Close
//       </button>
//       <button
//         className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
//         type="button"
//       >
//         Save Changes
//       </button>
//     </div>
//   );
// }

export default Modal;
