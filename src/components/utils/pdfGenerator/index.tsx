import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Modal,
  Spinner,
} from "reactstrap";
import { Document, Page, Text, usePDF } from "@react-pdf/renderer";
import clsx from "clsx";
// import printJS from "print-js";
import ReactLoading from "react-loading";

const printJS = () => import("print-js");

const usePDFGenerator = ({
  onAfterPrint = () => {},
  PDFDocument = (
    <Document>
      <Page size={"C8"}>
        <Text>No Document</Text>
      </Page>
    </Document>
  ),
  ...props
}) => {
  const [instance, updateInstance] = usePDF({
    document: PDFDocument,
    ...props,
  });

  const [isPDFError, setIsPDFError] = useState(false);

  useEffect(() => {
    updateInstance(PDFDocument);
  }, [PDFDocument, updateInstance]);

  const handlePrint = useCallback(async () => {
    if (typeof window !== "undefined") {
      try {
        if (instance.url) {
          const printJSModule = await printJS();
          printJSModule.default({
            printable: instance.url,
            type: "pdf",
            onPrintDialogClose: onAfterPrint,
            onError: (err) => {
              console.error("PrintJS Error:", err);
              setIsPDFError(true);
            },
            // silent: true,
          });
        }
      } catch (error) {
        console.error("An error occurred during printing:", error);
      }
    } else {
      console.log("Window is not defined. This code is running server-side.");
    }
  }, [instance.url, onAfterPrint]);

  useEffect(() => {
    if (isPDFError) {
      setTimeout(() => {
        handlePrint();
        setIsPDFError(false);
      }, 200);
    }
  }, [isPDFError]);

  // TODO: research to make iframe/pdf container height&width to be responsive to the pdf size
  const PDFViewer = useCallback(
    ({ style = {}, className = "" }) => (
      <div
        className={clsx("d-flex rounded border", className)}
        style={{ padding: 32, minHeight: 600, ...style }}
      >
        <iframe
          style={{ flex: 1 }}
          id="invoice-iframe"
          title="invoice-iframe"
          src={instance.url + "#toolbar=0"}
        />
      </div>
    ),
    [instance.url]
  );

  const PDFModal = useMemo(
    () =>
      ({
        isOpen = false,
        toggle = () => {},
        title = "",
        onClickPrint = () => {},
        disablePrint = false,
        viewerStyle = {},
        isLoading = false,
      } = {}) => {
        return (
          <Modal
            zIndex={2000}
            size="xl"
            centered
            isOpen={isOpen}
            toggle={toggle}
          >
            <Card className="card-box">
              <CardHeader
                className="p-4"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <strong style={{ fontSize: 20 }}>{title}</strong>
              </CardHeader>
              <CardBody className="p-4">
                <PDFViewer style={{ ...viewerStyle }} />
              </CardBody>
              <CardFooter className="d-flex justify-content-end p-4">
                <Button
                  color="primary"
                  onClick={onClickPrint}
                  disabled={disablePrint}
                >
                  {isLoading ? (
                    <ReactLoading
                      type="spin"
                      color="white"
                      height="22px"
                      width="22px"
                    />
                  ) : (
                    "Cetak"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </Modal>
        );
      },
    [PDFViewer]
  );

  return {
    PDFViewer,
    handlePrint,
    PDFModal,
    updateInstance,
    instance,
  };
};

export default usePDFGenerator;
