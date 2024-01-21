import React, { useEffect, useState } from "react";
import Image from "next/image";

import Button from "../../Button";
import OffCanvasOverlay from "../../OffCanvasOverlay";

import type { ModalImageProps } from "../types";
import BadgeSuccessIcon from "../../Icons/badge-success-icon";
import moment from "moment";
import KeyboardArrowLeftIcon from "../../Icons/keyboard-arrow-left-icon";
import CloseIcon from "../../Icons/close-icon";
import KeyboardArrowRightIcon from "../../Icons/keyboard-arrow-right-icon";

function ModalImage({
  open,
  maskClosable = true,
  onOk,
  onCancel,
  data,
}: ModalImageProps) {
  const [currImg, setCurrImg] = useState(0);

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
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="flex w-full justify-end">
                  <div className="cursor-pointer" onClick={onCancel}>
                    <CloseIcon />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  {typeof data !== "string" && (
                    <div
                      className="cursor-pointer"
                      onClick={(e) => {
                        if (currImg !== 0) {
                          setCurrImg(currImg - 1);
                        } else {
                          e?.preventDefault();
                        }
                      }}
                    >
                      <KeyboardArrowLeftIcon />
                    </div>
                  )}
                  <div className="flex items-center justify-center p-4">
                    {typeof data === "string" ? (
                      <img
                        className="contain flex "
                        style={{ maxHeight: 300 }}
                        src={
                          data ? `${process.env.NEXT_PUBLIC_API}/${data}` : data
                        }
                      />
                    ) : (
                      <img
                        className="contain flex "
                        style={{ maxHeight: 300 }}
                        src={
                          data
                            ? `${process.env.NEXT_PUBLIC_API}/${data?.[currImg]?.image}`
                            : data?.[currImg]?.image
                        }
                      />
                    )}
                  </div>
                  {typeof data !== "string" && (
                    <div
                      className="cursor-pointer"
                      onClick={(e) => {
                        if (currImg < data?.length - 1) {
                          setCurrImg(currImg + 1);
                        } else {
                          e?.preventDefault();
                        }
                      }}
                    >
                      <KeyboardArrowRightIcon />
                    </div>
                  )}
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

export default ModalImage;
