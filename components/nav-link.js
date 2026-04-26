"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, onClick }) {
  const path = usePathname();
  const isActive = path === href || (path === "/" && href === "/");

  return (
    <Link
      href={href}
      className={isActive ? "nav-item nav-link active" : "nav-item nav-link"}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
