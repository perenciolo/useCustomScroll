import React from "react";

const useCustomScroll = (cb?: () => void) => {
  const fieldRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (fieldRef?.current) {
      fieldRef.current.scrollIntoView({
        behavior: "smooth",
      });
      cb && cb();
    }
  }, [cb]);
  return fieldRef;
};

export default useCustomScroll;
