"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavDropdown({ closeNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e) => {
    if (e) e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    if (closeNav) closeNav();
  };

  return (
    <div
      className={isOpen ? "nav-item dropdown show" : "nav-item dropdown"}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href="#"
        className="nav-link dropdown-toggle"
        data-toggle="dropdown"
        onClick={toggleDropdown}
      >
        Others
      </a>
      {isOpen && (
        <div className="dropdown-menu rounded-0 m-0 show">
          <Link href="/store" className="dropdown-item" onClick={handleLinkClick}>
            Store
          </Link>
          <Link href="/forum" className="dropdown-item" onClick={handleLinkClick}>
            Forum
          </Link>
        </div>
      )}
    </div>
  );
}
