'use client';

import { useAppStore } from "@/store/useAppStore";
import { useState } from "react";

export default function SocialPopup() {
  const { contact } = useAppStore();
  const [open, setOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <>
      <span
        className="scroll-to-top social-style"
      >
        <i className="fas fa-comment-dots" onClick={handleClick}></i>
        <ul className={`social-container ${open ? "active" : ""}`}>
          {
              contact?.phoneNumber?.length > 0 ? (
                <>
                  {
                    contact?.phoneNumber[0] ? (
                        <li className="line-icon">
                            <a href={`tel:${contact?.phoneNumber[0]?.number}`} target="_blank">
                                <i className="fas fa-phone"></i>
                            </a>
                        </li>
                    ) : ""
                  }
                </>
              ) : ""
          }
          {
              contact?.telegramLink ? (
                  <li className="telegram-icon">
                      <a href={contact?.telegramLink} target="_blank">
                          <i className="icon-telegram-1"></i>
                      </a>
                  </li>
              ) : ""
          }
          {
              contact?.whatsapp ? (
                  <li className="whatsapp-icon">
                      <a href={contact?.whatsapp} target="_blank">
                          <i className="fab fa-whatsapp"></i>
                      </a>
                  </li>
              ) : ""
          }
          {
              contact?.messenger ? (
                  <li className="facebook-icon">
                      <a href={contact?.messenger} target="_blank">
                          <i className="fab fa-facebook-messenger"></i>
                      </a>
                  </li>
              ) : ""
          }
      </ul>
      </span>
    </>
  );
}
