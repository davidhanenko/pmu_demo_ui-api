import { useEffect, useState } from 'react';

const useMediaQuery = (width: number) => {
  const [isUnderMediaQuery, setIsUnderMediaQuery] =
    useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia(
      `(max-width: ${width}px)`
    );

    // Set the initial value of the `isMobile` state variable
    setIsUnderMediaQuery(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsUnderMediaQuery(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener(
      'change',
      handleMediaQueryChange
    );

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleMediaQueryChange
      );
    };
  }, [width]);

  return isUnderMediaQuery;
};

export default useMediaQuery;
