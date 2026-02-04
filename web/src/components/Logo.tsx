export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.svg" alt="Zenflow" className="h-9 w-9" />
      <div className="leading-tight">
        <p className="text-lg font-semibold text-ink">Zenflow</p>
        <p className="text-xs text-slate">Invest with clarity</p>
      </div>
    </div>
  );
}
