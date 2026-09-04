"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type VideoType = "youtube" | "facebook" | null;

interface VideoModalProps {
  videoSrc: string;
}

export default function VideoModal({
  videoSrc,
}: VideoModalProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [videoType, setVideoType] = useState<VideoType>(null);

  // Portal
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  // Detect video
  useEffect(() => {
    if (!videoSrc) {
      setVideoId(null);
      setVideoType(null);
      return;
    }

    let normalizedUrl = videoSrc.trim();

    if (!/^https?:\/\//i.test(normalizedUrl)) {
        normalizedUrl = `https://${normalizedUrl}`;
    }

    const url = new URL(normalizedUrl);
    const hostname = url.hostname.toLowerCase();
    // YouTube
    if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "youtu.be" ||
      hostname === "www.youtu.be"
    ) {
      let id = "";

      if (hostname.includes("youtu.be")) {
        id = url.pathname.substring(1);
      }

      if (hostname.includes("youtube.com")) {
        id = url.searchParams.get("v") || "";

        if (!id && url.pathname.startsWith("/shorts/")) {
          id = url.pathname.split("/shorts/")[1];
        }

        if (!id && url.pathname.startsWith("/embed/")) {
          id = url.pathname.split("/embed/")[1];
        }
      }

      if (id) {
        setVideoId(id);
        setVideoType("youtube");
        return;
      }
    }

    // Facebook
    if (
      hostname.includes("facebook.com") ||
      hostname.includes("fb.watch")
    ) {
      setVideoId(videoSrc);
      setVideoType("facebook");
      return;
    }

    setVideoId(null);
    setVideoType(null);
  }, [videoSrc]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const popupContent = (
    <section
      className="video-popup-section"
      onClick={closeModal}
    >
      <div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="video-close-btn"
          onClick={closeModal}
          aria-label="Close video"
        >
          <span>×</span>
        </button>

        {/* Video */}
        <div className="video-wrapper">
          {videoType === "youtube" && videoId && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}

          {videoType === "facebook" && videoId && (
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                videoId
              )}&show_text=false`}
              title="Facebook video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}

          {!videoId && (
            <div className="video-error">
              <span>⚠</span>
              <p>Unable to load this video.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <>
      {/* Play button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="video-play-btn"
        aria-label="Play video"
      >
        <span className="play-icon">
          <i className="fa fa-play" />
        </span>

        <span className="play-ripple ripple-one" />
        <span className="play-ripple ripple-two" />
      </button>

      {/* Modal */}
      {mounted &&
        isOpen &&
        createPortal(popupContent, document.body)}
    </>
  );
}