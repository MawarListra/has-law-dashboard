import React from "react";

const useResponsive = () => {
  const [initialRender, setInitialRender] = React.useState<boolean>(true);
  const [width, setWidth] = React.useState<number>(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  React.useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      handleWindowSizeChange();
    }
  }, [initialRender]);

  return width <= 767;
};

export default useResponsive;
