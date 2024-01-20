import React from "react";
import Image from "next/image";

import Button from "../../Button";
import OffCanvasOverlay from "../../OffCanvasOverlay";

import type { RejectProps } from "../types";
import { InputField, Label } from "../..";
import CloseIcon from "../../Icons/close-icon";

function ModalReject({
  open,
  maskClosable = true,
  onOk,
  onCancel,
  notes,
  setNotes,
  labelReject,
  onClose,
}: RejectProps) {
  return (
    <React.Fragment>
      {open && (
        <div className="fixed inset-0 z-20 m-8 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none md:m-0">
          <div className="relative mx-auto my-6 w-auto max-w-sm">
            {/*CONTENT POPUP*/}
            <div className="flex w-96 flex-col gap-4 rounded-lg border-0 bg-white p-8 align-middle shadow-lg outline-none focus:outline-none">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-left text-lg font-bold text-ui-gray-blue-50">
                  Tolak Member
                </h3>
                <div className="cursor-pointer" onClick={onClose}>
                  <CloseIcon />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="division" className="ml-4">
                  Alasan ditolak&nbsp;
                  <sup className="font-black text-ui-red">*</sup>
                </Label>
                {/* <InputField
                  name="reason"
                  placeholder="Alasan"
                  type="textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                /> */}
                <textarea
                  className="flex w-full p-4"
                  style={{
                    height: "105px",
                    borderRadius: "5px",
                    background: "#FFF",
                    boxShadow: "0px 2px 5px 0px rgba(38, 51, 77, 0.03)",
                  }}
                  name="reason"
                  placeholder="Alasan"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

              <div>
                <Button
                  type="button"
                  color="red"
                  onClick={onOk}
                  disabled={!notes || notes === ""}
                >
                  {labelReject}
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

export default ModalReject;
