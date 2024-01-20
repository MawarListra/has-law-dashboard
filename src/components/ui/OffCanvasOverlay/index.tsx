import React from "react";

interface OffCanvasOverlayProps {
  active: boolean;
  disabledBackground?: boolean;
  onClick?: () => any;
}

function OffCanvasOverlay({
  active,
  disabledBackground,
  onClick,
}: OffCanvasOverlayProps) {
  React.useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [active]);

  return (
    <React.Fragment>
      {active && (
        <div
          onClick={onClick}
          className={`fixed inset-0 z-10 h-full w-full ${
            !disabledBackground && "bg-black/25"
          }`}
        />
      )}
    </React.Fragment>
  );
}

export default OffCanvasOverlay;
