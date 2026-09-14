import "./Footer.css";

/**
 * Footer
 * Three-column dark footer: social links, centered brand mark, copyright.
 * Icons are inline SVG — no external icon library required.
 *
 * Usage:
 * <Footer
 *   monogram="GS"
 *   brandName="Gulzar & Son's"
 *   tagline="custom woodwork"
 *   facebookUrl="https://facebook.com/..."
 *   instagramUrl="https://www.instagram.com/i_am_zahidgulzar/"
 *   youtubeUrl="https://youtube.com/..."
 * />
 */

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="5" width="20" height="14" rx="4" ry="4" />
      <polygon
        points="10 9 16 12 10 15 10 9"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

export default function Footer({
  monogram = "GS",
  brandName = "Gulzar & Son's",
  tagline = " W o o d w o r k",
  facebookUrl = "https://www.facebook.com/zahid.gulzar.927980",
  instagramUrl = "https://www.instagram.com/i_am_zahidgulzar/",
  youtubeUrl = "https://www.youtube.com/@mastercarpenter01",
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__social">
          <span className="site-footer__social-label">Follow us:</span>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="site-footer__icon-link"
          >
            <FacebookIcon />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="site-footer__icon-link"
          >
            <InstagramIcon />
          </a>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Subscribe on YouTube"
            className="site-footer__icon-link"
          >
            <YoutubeIcon />
          </a>
        </div>

        <div className="site-footer__brand">
          <span className="site-footer__mark" aria-hidden="true">
            {monogram}
          </span>
          <span className="site-footer__brand-name">{brandName}</span>
          <span className="site-footer__tagline">{tagline}</span>
        </div>

        <div className="site-footer__copyright">
          <p>
            © Copyright {year} {brandName}
          </p>
        </div>
      </div>
    </footer>
  );
}
