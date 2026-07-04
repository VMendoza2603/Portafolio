import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold">404</h1>
      <p className="mb-8 text-muted-foreground">Página no encontrada</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
