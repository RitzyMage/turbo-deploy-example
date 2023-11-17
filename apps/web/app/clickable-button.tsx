'use client';

import { useState } from 'react';

export default function ClickableButton(): JSX.Element {
  const [clicks, setClicks] = useState(0);
  return (
    <>
      {clicks}
      <button
        className="block bg-emerald-500 hover:shadow hover:bg-emerald-600"
        onClick={() => setClicks(clicks + 1)}>
        click mee
      </button>
    </>
  );
}
