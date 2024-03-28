import { useEffect, useState } from "react";

function useDebounce(value: any, delay: any) {
  const [debouncedValue, setDebouncedValue] = useState<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
