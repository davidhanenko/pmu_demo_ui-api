'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie('localConsent', 'true', {
      maxAge: 60 * 60 * 24,
    });
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-slate-700 bg-opacity-70'>
      <div className='fixed bottom-0 left-0 right-0 flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between px-4 py-8 bg-gray-100'>
        <div>
          <Image
            src={'/images/cookie.png'}
            alt={'cookie'}
            width={64}
            height={64}
          />
        </div>
        <span className='text-dark text-base md:mx-16'>
          This website uses cookies to improve user
          experience. By using our website you consent to
          all cookies in accordance with our Cookie Policy.
        </span>
        <button
          className='bg-purple-600 hover:bg-purple-500 py-2 px-8 rounded text-white'
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
