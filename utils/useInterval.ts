import { useEffect, useRef } from "react";

interface IntervalProps {
  callback(): void;
  delay: number;
  start: boolean;
}

function useInterval(callback: () => void, delay: number, start: boolean) {
  const savedCallback = useRef<any>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && start) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, start]);
}

export default useInterval;
