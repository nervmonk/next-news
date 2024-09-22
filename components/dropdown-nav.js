"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
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
          <Link href="/store" className="dropdown-item">
            Store
          </Link>
          <Link href="/forum" className="dropdown-item">
            Forum
          </Link>
        </div>
      )}
    </div>
  );
}
