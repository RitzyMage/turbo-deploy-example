import ClickableButton from './clickable-button';

export default function Page(): JSX.Element {
  return (
    <div className="py-4 px-8 bg-slate-700/25 h-full flex-grow shadow">
      <h1 className="text-2xl font-header">Button Page</h1>
      <ClickableButton />
    </div>
  );
}
