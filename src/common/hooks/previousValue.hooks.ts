import { useEffect, useRef } from 'react';

// https://dev.to/mcavaliere/comparing-previous-useeffect-values-in-react-2o4g
export const usePreviousValue = <T extends unknown>(
  value: T
): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
