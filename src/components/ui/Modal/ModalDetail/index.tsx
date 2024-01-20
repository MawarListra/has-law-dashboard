import React, { useEffect } from "react";
import Image from "next/image";

import Button from "../../Button";
import OffCanvasOverlay from "../../OffCanvasOverlay";

import type { ModalDetailProps } from "../types";
import BadgeSuccessIcon from "../../Icons/badge-success-icon";
import moment from "moment";
import KeyboardArrowLeftIcon from "../../Icons/keyboard-arrow-left-icon";
import CloseIcon from "../../Icons/close-icon";
import { formatToCurrency } from "@/libs/format-to-currency";

function ModalDetail({
  open,
  maskClosable = true,
  onOk,
  onCancel,
  data,
}: ModalDetailProps) {
  return (
    <React.Fragment>
      {open && (
        <div className="fixed inset-0 z-20 m-8 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none md:m-0">
          <div className="relative mx-auto my-6 w-auto max-w-md">
            {/*CONTENT POPUP*/}
            <div
              className="relative flex flex-col gap-4 rounded-lg border-0 bg-white align-middle shadow-lg outline-none focus:outline-none"
              style={{ minWidth: 500 }}
            >
              <div className="flex flex-col  justify-center p-8 text-center">
                <div className="flex w-full justify-end">
                  <div className="cursor-pointer" onClick={onCancel}>
                    <CloseIcon />
                  </div>
                </div>
                <div>
                  <span>Detail Pesanan</span>
                </div>
                <div className="flex flex-col space-y-2 p-4">
                  {/* <img
                    className="contain flex "
                    style={{ maxHeight: 300 }}
                    src={data ? `${process.env.NEXT_PUBLIC_API}/${data}` : data}
                  /> */}
                  {data?.map((e: any) => {
                    return (
                      <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                          <span className="text-left">{e?.menu?.name}</span>
                          <span className="text-left">
                            {e?.quantity}x @
                            {formatToCurrency(e?.menu?.price ?? 0)}
                          </span>
                        </div>
                        <div>
                          <span>{formatToCurrency(e?.total ?? 0, true)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <OffCanvasOverlay active={open} onClick={onCancel} />
    </React.Fragment>
  );
}

export default ModalDetail;
