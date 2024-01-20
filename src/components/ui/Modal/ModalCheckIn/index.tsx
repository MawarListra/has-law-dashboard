import React, { useEffect } from "react";
import Image from "next/image";

import Button from "../../Button";
import OffCanvasOverlay from "../../OffCanvasOverlay";

import type { CheckInProps } from "../types";
import BadgeSuccessIcon from "../../Icons/badge-success-icon";
import moment from "moment";
import KeyboardArrowLeftIcon from "../../Icons/keyboard-arrow-left-icon";
import { ApiGetOneMemberCheckIn } from "@/hooks/use-fetch";

function ModalCheckIn({
  open,
  maskClosable = false,
  onOk,
  onCancel,
  data,
}: CheckInProps) {
  console.log(
    "cek here compare",
    moment(data?.member?.member_until).diff(moment().toDate(), "days") <= 0
  );
  return (
    <React.Fragment>
      {open && (
        <div className="fixed inset-0 z-20 m-8 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none md:m-0">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto my-6 w-auto max-w-md"
          >
            {/*CONTENT POPUP*/}
            <div
              className="relative flex flex-col gap-4 rounded-lg border-0 bg-white align-middle shadow-lg outline-none focus:outline-none"
              style={{ minWidth: 500 }}
            >
              <div className="flex flex-col items-center justify-center space-y-2 border-b-2 p-8">
                <BadgeSuccessIcon />
                <span className="text-2xl">Check-In Berhasil</span>
              </div>
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <div className="flex flex-col">
                  <span className="text-base font-medium leading-normal text-[#7D8FB3]">
                    Nama Member
                  </span>
                  <span className="text-2xl font-medium leading-normal text-black">
                    {data?.member?.name || "-"}
                  </span>
                  {data?.package_data && (
                    <span className="font-medium font-semibold leading-normal text-black">
                      {data?.package_data?.package_type?.name +
                        " - " +
                        data?.package_data?.package_category?.name}
                    </span>
                  )}
                  <span
                    className={`text-lg font-semibold leading-normal ${
                      moment(data?.member?.member_until).diff(
                        moment().toDate(),
                        "days"
                      ) > 0
                        ? "text-black"
                        : "text-red-500"
                    } text-black`}
                  >
                    Membership sampai :{" "}
                    {moment(data?.member?.member_until).diff(
                      moment().toDate(),
                      "days"
                    ) > 0
                      ? moment(data?.member?.member_until).format(
                          "DD MMMM YYYY"
                        )
                      : "expired"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium leading-normal text-[#7D8FB3]">
                    Tanggal dan Jam
                  </span>
                  <span className="text-2xl font-medium leading-normal text-black">
                    {moment(data?.checkin_date).format("DD MMMM YYYY HH:mm")}
                  </span>
                </div>
                <div className="flex items-center justify-center p-4">
                  <img
                    className="contain flex "
                    style={{ maxHeight: 300 }}
                    src={
                      data?.member?.identity_image
                        ? `${process.env.NEXT_PUBLIC_API}/${data?.member?.identity_image}`
                        : data?.member?.identity_image
                    }
                  />
                </div>
              </div>
              <Button type="button" color="blue" onClick={onOk}>
                <KeyboardArrowLeftIcon />
                Tutup Halaman
              </Button>
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

export default ModalCheckIn;
