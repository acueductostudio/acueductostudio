import { useEffect, useRef } from "react";

function useInterval(callback, delay, start) {
  const savedCallback = useRef();

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
