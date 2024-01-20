import React from "react";

interface IBaseModal {
  open: boolean;
  maskClosable?: boolean;
}

export interface ModalProps extends IBaseModal {
  children: React.ReactNode;
  Header?: React.ReactNode;
  Footer?: React.ReactNode;
  onClose?: () => any;
}

export interface ConfirmProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
}
export interface ConfirmPrintProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
  disable: boolean;
}
export interface CheckInProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
  data: any;
}

export interface ModalImageProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
  data: any;
}

export interface ModalDetailProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
  data: any;
}

export interface RejectProps extends IBaseModal {
  onOk?: () => any;
  onCancel?: () => any;
  notes: any;
  setNotes: any;
  labelReject: string;
  onClose: () => any;
}
