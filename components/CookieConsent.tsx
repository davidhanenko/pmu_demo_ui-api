'use client';

import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      hasCookie('localConsent')
        ? setShowConsent(false)
        : setShowConsent(true);
    }, 4000);
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie('localConsent', 'false', {
      maxAge: 60 * 60 * 24,
    });
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-slate-700/70 z-30'>
      <div className='fixed bottom-0 left-0 right-0 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between px-4 py-8 bg-gray-100'>
        <span className='text-dark text-base md:mx-16'>
          This website uses cookies to improve user
          experience. By using our website you consent to
          all cookies in accordance with our Cookie Policy.
        </span>
        <button
          className='bg-purple-600 hover:bg-purple-500 py-2 px-8 rounded text-teal1'
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
