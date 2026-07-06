"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-3">Error inesperado</p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-cream">
          Esto no cargó
        </h1>
        <p className="mt-2 text-sm text-cream/60">
          Algo salió mal de nuestra parte. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gold-border-btn border border-gold text-gold px-4 py-2 text-xs tracking-[0.25em] uppercase font-medium transition-colors"
          >
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-border text-cream px-4 py-2 text-xs tracking-[0.25em] uppercase font-medium hover:border-gold hover:text-gold transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
