'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Page() {
  const [d, setD] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/brows', {
      description: d,
      steps: [],
      videoBg: '',
    });
  };

  return (
    <div className='text-white'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='description' />
        <button type='submit'>save</button>
      </form>
    </div>
  );
}
