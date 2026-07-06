import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">Error 404</p>
        <h1 className="font-display text-7xl font-bold text-cream">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-cream">Página no encontrada</h2>
        <p className="mt-2 text-sm text-cream/60">
          La página que buscas no existe o fue movida.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center gold-border-btn border border-gold text-gold px-4 py-2 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
