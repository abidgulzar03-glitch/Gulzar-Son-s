import { createPortal } from "react-dom";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  // WhatsApp number
  const phoneNumber = "916005070754";

  // Call number
  const callNumber = "6005070754";

  // WhatsApp message
  const message = encodeURIComponent(
    "Hello Gulzar & Sons, I would like to know more about your services.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Instagram profile
  const instagramUrl = "https://www.instagram.com/i_am_zahidgulzar/";

  const buttons = (
    <div className="social-buttons">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button instagram-button"
        aria-label="Follow us on Instagram"
      >
        <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
        <span className="instagram-pulse"></span>
      </a>

      <a
        href={`tel:${callNumber}`}
        className="social-button call-button"
        aria-label="Call us"
      >
        <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2z"
          />
        </svg>
        <span className="call-pulse"></span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="social-button whatsapp-button"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="social-icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.92 2.93 4.65 4.11.65.28 1.15.45 1.55.57.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z"
          />
          <path
            fill="currentColor"
            d="M16.01 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.1 28.8l6.55-1.72a12.74 12.74 0 0 0 6.36 1.69h.01c7.06 0 12.79-5.74 12.79-12.8S23.07 3.2 16.01 3.2zm0 23.45h-.01c-1.99 0-3.94-.54-5.64-1.55l-.4-.24-3.89 1.02 1.04-3.79-.26-.41a10.6 10.6 0 1 1 9.16 4.97z"
          />
        </svg>
        <span className="whatsapp-pulse"></span>
      </a>
    </div>
  );

  return createPortal(buttons, document.body);
}

export default WhatsAppButton;
