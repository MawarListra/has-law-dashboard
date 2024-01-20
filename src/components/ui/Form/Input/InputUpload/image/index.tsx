import React from "react";
import Image from "next/image";
import { ButtonIcon, InputField } from "@/components/ui";

import UploadIcon from "@/components/ui/Icons/upload-icon";
import EditIcon from "@/components/ui/Icons/edit-icon";
import DeleteIcon from "@/components/ui/Icons/delete-icon";

import type { InputUploadProps } from "../../types";

function InputUpload({
  name,
  value,
  accept,
  placeholder,
  disabled = false,
  onChange,
}: InputUploadProps) {
  const props = {
    name,
    placeholder,
  };

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    const files = event.target.files;

    if (!files || files?.length === 0) return;

    const file = files[0];
    if (!file.type.includes("image/")) {
      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }
      return;
    }

    onChange?.(file, { name, value });
  };

  const ImageNextProps =
    typeof value === "string"
      ? {
          loader() {
            return value;
          },
        }
      : {};

  return (
    <React.Fragment>
      {!value ? (
        <InputField
          className="cursor-default"
          iconRight={<UploadIcon />}
          onClick={() => inputFileRef.current?.click()}
          disabled={disabled}
          readOnly
          {...props}
        />
      ) : (
        <div className="relative w-1/2">
          <Image
            className="h-auto w-full"
            src={
              value instanceof Blob
                ? URL.createObjectURL(value)
                : typeof value === "string"
                ? value
                : ""
            }
            alt="Test"
            width={500}
            height={0}
            {...ImageNextProps}
          />
          {!disabled && (
            <div className="absolute right-3 top-3">
              <ButtonIcon
                className="mr-2"
                title="Ubah Gambar"
                onClick={() => inputFileRef.current?.click()}
              >
                <EditIcon color="blue" size={4} />
              </ButtonIcon>
              <ButtonIcon
                title="Hapus Gambar"
                onClick={() =>
                  onChange?.(null, {
                    name: inputFileRef.current?.name!,
                    value: "",
                  })
                }
              >
                <DeleteIcon color="red" size={4} />
              </ButtonIcon>
            </div>
          )}
        </div>
      )}

      <input
        name={name}
        ref={inputFileRef}
        type="file"
        onChange={(e) => changeFile(e)}
        hidden
        {...{ accept }}
      />
    </React.Fragment>
  );
}

export default InputUpload;
