import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-20 bg-white text-black">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-4">Page Not Found</p>
        <h1 className="text-4xl font-bold mb-4">Oops! This page does not exist.</h1>
        <p className="text-sm leading-relaxed text-gray-700 mb-8">
          The link you followed may be broken, or the page may have been moved. Use the button below to return to the store.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white uppercase text-xs font-bold tracking-[0.2em] hover:bg-gray-900 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
