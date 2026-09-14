import { useEffect } from "react";
import "./InstagramFeed.css";

export default function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => window.instgrm?.Embeds?.process();

    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className="ig-feed">
      <div className="ig-feed__header">
        <div className="ig-feed__logo">
          <InstagramIcon />
        </div>

        <p className="ig-feed__label">FOLLOW US ON INSTAGRAM</p>

        <h2 className="ig-feed__name">@i_am_zahidgulzar</h2>

        <a
          href="https://www.instagram.com/i_am_zahidgulzar/"
          target="_blank"
          rel="noreferrer"
          className="ig-feed__btn"
        >
          View Profile
        </a>
      </div>

      <div className="ig-feed__grid">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DcBktiSJ0Nc/"
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DbyH3vdJxSJ/"
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/Dbn43lTJDYd/"
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DbUcI6BJ-Q2/"
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DaS6c_6pHf2/"
          data-instgrm-version="14"
        />

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/Dcv2G8UpFPi/"
          data-instgrm-version="14"
        />
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
