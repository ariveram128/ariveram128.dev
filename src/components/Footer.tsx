export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-faint">
          <span className="text-cyan">{">"}</span>{" "}
          <span className="text-dim">SYSTEM OPERATIONAL</span>
        </p>
        <p className="font-mono text-xs text-faint">
          © 2026 MARVIN RIVERA // BUILT WITH NEXT.JS
        </p>
      </div>
    </footer>
  );
}
