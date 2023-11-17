'use client';

import { useState } from 'react';

export default function ClickableButton(): JSX.Element {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      <div className="text-center text-8xl p-4" data-cy="click-counter">
        {clicks}
      </div>
      <button
        className="block hover:shadow hover:from-indigo-500 hover:to-rose-600 bg-gradient-to-r from-indigo-600 to-rose-700 w-full p-2 rounded"
        onClick={() => setClicks(clicks + 1)}
        type="button">
        Click Me
      </button>
    </>
  );
}
