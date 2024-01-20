import React, { useState } from "react";
import Image from "next/image";
import { ButtonIcon, InputField } from "@/components/ui";

import UploadIcon from "@/components/ui/Icons/upload-icon";
import EditIcon from "@/components/ui/Icons/edit-icon";
import DeleteIcon from "@/components/ui/Icons/delete-icon";
import pdfIc from "@/components/assets/pdf-icon.jpeg";

import type { InputUploadProps } from "../types";

function InputUpload({
  name,
  value,
  accept,
  placeholder,
  onChange,
}: InputUploadProps) {
  const props = {
    name,
    placeholder,
  };
  const [pdfFile, setPdfFile] = useState<File | undefined>(undefined);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    const files = event.target.files;

    if (!files || files?.length === 0) return;

    const file = files[0];
    if (
      !file.type.includes("image/") &&
      !file.type.includes("application/pdf")
    ) {
      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }
      return;
    }

    if (file?.type === "application/pdf") {
      setPdfFile(file);
    } else {
      setPdfFile(undefined);
    }
    onChange?.(file, { name, value });
  };

  return (
    <React.Fragment>
      {!value && !pdfFile ? (
        <InputField
          className="cursor-default"
          iconRight={<UploadIcon />}
          onClick={() => inputFileRef.current?.click()}
          readOnly
          {...props}
        />
      ) : (
        <div className="relative">
          {pdfFile && pdfFile !== undefined ? (
            <div
              onClick={() => {
                // if (tempData?.identity.split(".").includes("PDF")) {
                let el = document.createElement("a");
                el.href = URL.createObjectURL(pdfFile || new Blob());
                el.target = "_blank";
                el.download = `${name}.pdf`;
                el.click();
                // }
              }}
            >
              <Image
                className="img-fluid flex "
                src={pdfFile ? pdfIc : ""}
                alt="Test"
                width={200}
                height={150}
              />
            </div>
          ) : (
            <Image
              className="img-fluid flex"
              src={
                value instanceof Blob
                  ? URL.createObjectURL(value)
                  : `${process.env.NEXT_PUBLIC_API}/${value}`
              }
              alt="Test"
              width={200}
              height={150}
            />
          )}
          <div
            className="absolute top-3 flex justify-between"
            style={{ width: "200px" }}
          >
            <ButtonIcon
              className="mr-2"
              title="Ubah Gambar"
              onClick={() => inputFileRef.current?.click()}
            >
              <EditIcon color="blue" size={4} />
            </ButtonIcon>
            <ButtonIcon
              title="Hapus Gambar"
              onClick={() => {
                onChange?.(null, {
                  name: inputFileRef.current?.name!,
                  value: "",
                });
                setPdfFile(undefined);
              }}
            >
              <DeleteIcon color="red" size={4} />
            </ButtonIcon>
          </div>
        </div>
      )}

      <input
        name={name}
        ref={inputFileRef}
        type="file"
        onChange={(e) => {
          changeFile(e);
        }}
        hidden
        // {...{ accept }}
        accept={accept}
        multiple
      />
    </React.Fragment>
  );
}

export default InputUpload;
