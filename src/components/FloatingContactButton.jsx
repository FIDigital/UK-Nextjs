"use client";

import { MessageCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function FloatingContactButton() {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/contact") return null;

  const handleContactClick = () => {
    router.push("/contact#contact-form");
  };

  return (
    <>
      <button 
        onClick={handleContactClick}
        className="floating-contact-btn"
        aria-label="Contact Us"
        title="Contact Us"
      >
        <MessageCircle size={24} />
      </button>

      <style jsx>{`
        .floating-contact-btn {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          z-index: 9999;
          background: linear-gradient(135deg, var(--primary) 0%, #6366f1 100%);
          color: white;
          border: none;
          width: 54px;
          height: 54px;
          border-radius: 0 12px 12px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 4px 0 15px rgba(29, 78, 216, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .floating-contact-btn:hover {
          width: 62px;
          background: linear-gradient(135deg, #1e3a8a 0%, var(--primary) 100%);
          box-shadow: 6px 0 20px rgba(29, 78, 216, 0.4);
        }

        @media (max-width: 480px) {
          .floating-contact-btn {
            width: 48px;
            height: 48px;
          }
          .floating-contact-btn:hover {
            width: 54px;
          }
        }
      `}</style>
    </>
  );
}
