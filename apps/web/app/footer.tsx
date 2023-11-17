const linkClasses = 'text-blue-200 hover:text-blue-100';

export default function Footer(): JSX.Element {
  return (
    <div className="flex justify-around bg-slate-900 bg-gradient-to-l from-indigo-700/50 to-rose-800/60 px-8 py-4 w-full">
      <div className="flex flex-col">
        <div className="font-header">Example Turbo App</div>
        <div>23 Quirky Lane</div>
        <div>Puzzletown, Confusion 45678</div>
        <div>Planet Whimsy, Galaxy of Laughter</div>
      </div>
      <div className="flex flex-col">
        <div className="font-header">Important Links</div>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Whispering to Plants
        </a>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Expert Napping Tips
        </a>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Invisible Ink Supplies
        </a>
      </div>
      <div className="flex flex-col">
        <div className="font-header">Unimportant Links</div>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          How Not To Burn Salad
        </a>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Underwater Basket Weaving
        </a>
        <a className={linkClasses} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Extreme Ironing Championships
        </a>
      </div>
    </div>
  );
}
