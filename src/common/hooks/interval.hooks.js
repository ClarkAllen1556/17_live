import React, { useEffect, useRef } from 'react';

// hook found in this blog post: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// SO reference: https://stackoverflow.com/questions/71184843/how-to-update-state-using-setinterval-on-functional-components-in-react
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
