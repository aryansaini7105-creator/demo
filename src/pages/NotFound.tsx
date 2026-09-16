import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-20 bg-white text-black">
      <SEO 
        title="404 — Page Not Found | CottonCanvas"
        description="The page you were looking for could not be found. Return to CottonCanvas to browse our sustainable cotton clothing collection."
        noindex={true}
      />
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-600 mb-4">404 Error</p>
        <h1 className="text-4xl font-serif font-bold mb-4">Page Not Found</h1>
        <p className="text-sm leading-relaxed text-gray-700 mb-8">
          The link you followed may be broken, or the page may have been moved. Return to the store to explore our organic cotton apparel.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-black text-white uppercase text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
