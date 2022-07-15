import React, { useEffect, useRef } from 'react';

// hook found in this blog post: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// SO reference: https://stackoverflow.com/questions/71184843/how-to-update-state-using-setinterval-on-functional-components-in-react
export function useInterval(callback: Function, delay: number) {
  const savedCallback = useRef<Function | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
