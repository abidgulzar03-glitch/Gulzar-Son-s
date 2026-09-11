// import React from "react";
import "./InstagramFeed.css";

/**
 * InstagramFeed
 * A static "as seen on Instagram" section: name, Instagram icon linking to
 * the profile, and a responsive row of photo/video tiles.
 *
 * Usage:
 * <InstagramFeed
 *   name="Robert Carpentry"
 *   instagramUrl="https://instagram.com/yourprofile"
 *   posts={[
 *     { image: "/images/insta1.jpg", url: "https://instagram.com/p/xxxx", username: "masinteriordesign", isVideo: true },
 *     { image: "/images/insta2.jpg", url: "https://instagram.com/p/yyyy" },
 *     ...
 *   ]}
 * />
 *
 * Drop your own images into /public or /src/assets and reference them,
 * or later swap `posts` for data fetched from Meta's Graph API if you
 * want it to auto-update.
 */
export default function InstagramFeed({ name, instagramUrl, posts = [] }) {
  return (
    <section className="ig-feed">
      <div className="ig-feed__header">
        <h2 className="ig-feed__name">{name}</h2>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on Instagram`}
          className="ig-feed__icon"
        >
          <InstagramGlyph />
        </a>
      </div>

      <div className="ig-feed__grid">
        {posts.map((post, i) => (
          <a
            key={i}
            href={post.url || instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-feed__tile"
          >
            <img
              src={post.image}
              alt={post.alt || `${name} Instagram post ${i + 1}`}
            />

            {post.isVideo && (
              <span className="ig-feed__play">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            )}

            {post.username && (
              <span className="ig-feed__badge">
                <InstagramGlyphSmall />
                {post.username}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}

function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function InstagramGlyphSmall() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      style={{ marginRight: 4 }}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="#fff" stroke="none" />
    </svg>
  );
}
