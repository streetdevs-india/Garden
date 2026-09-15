import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-page">
      <div className="wrap error-box">
        <div className="eyebrow">404</div>
        <h1>Page not found</h1>
        <p>That link may be old or mistyped. Try one of these instead.</p>
        <div className="mid-cta-actions">
          <Link href="/" className="btn btn-green">
            Home
          </Link>
          <Link href="/services" className="btn btn-outline">
            Services
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Blog
          </Link>
          <Link href="/quote" className="btn btn-outline">
            Get a quote
          </Link>
        </div>
      </div>
    </main>
  );
}
