import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">404 – Page not found</h1>
        <p className="mt-2 text-foreground/70">The page you’re looking for doesn’t exist.</p>
        <Link href="/" className="mt-6 inline-block px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500">
          Go home
        </Link>
      </div>
    </main>
  );
}


