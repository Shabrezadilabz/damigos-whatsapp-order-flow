import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[50vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-headline text-2xl font-bold text-primary">Page not found</h1>
      <Link href="/" className="mt-6 rounded-full bg-secondary text-white px-6 py-3 text-sm font-semibold">
        Back to the flow
      </Link>
    </main>
  );
}
