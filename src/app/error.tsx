"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
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
    <main className="error-page">
      <div className="wrap error-box">
        <div className="eyebrow">Something went wrong</div>
        <h1>We couldn’t load this page</h1>
        <p>Please try again. If it keeps happening, go back home or request a quote directly.</p>
        <div className="mid-cta-actions">
          <button type="button" className="btn btn-green" onClick={reset}>
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Back to home
          </Link>
          <Link href="/quote" className="btn btn-outline">
            Get a quote
          </Link>
        </div>
      </div>
    </main>
  );
}
