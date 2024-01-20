import React from "react";
import Image from "next/image";

import Button from "../../Button";
import OffCanvasOverlay from "../../OffCanvasOverlay";

import type { ConfirmProps } from "../types";

function ModalConfirm({
  open,
  maskClosable = false,
  onOk,
  onCancel,
}: ConfirmProps) {
  return (
    <React.Fragment>
      {open && (
        <div className="fixed inset-0 z-20 m-8 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none md:m-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto my-6 w-auto max-w-sm"
          >
            {/*CONTENT POPUP*/}
            <div className="relative flex w-full flex-col gap-4 rounded-lg border-0 bg-white p-8 align-middle shadow-lg outline-none focus:outline-none">
              <div>
                <Image
                  src="/images/site/removebg.png"
                  alt="removebg"
                  width={125}
                  height={125}
                  className="mx-auto"
                />
              </div>

              <h3 className="text-center text-lg font-bold text-ui-gray-blue-50">
                Apakah kamu yakin ingin menghapus data ini ?
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <Button type="button" outlined onClick={onCancel}>
                  Batal
                </Button>
                <Button type="button" color="red" onClick={onOk}>
                  Hapus
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <OffCanvasOverlay
        active={open}
        onClick={() => {
          if (maskClosable && onCancel) onCancel();
        }}
      />
    </React.Fragment>
  );
}

export default ModalConfirm;
