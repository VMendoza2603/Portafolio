"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-4xl font-bold">Algo salió mal</h1>
      <p className="mb-8 text-muted-foreground">
        Ocurrió un error inesperado. Intenta de nuevo.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}
