// components/header.tsx
import Link from "next/link";

export default function Header() {
  const navLinkClass =
    "rounded-full px-4 py-1.5 transition-colors duration-200 hover:bg-[#E08E10] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          AIAVATAR
        </Link>

        <nav className="flex items-center gap-2 text-sm">
          <Link href="/Dashboard" className={navLinkClass}>
            Dashboard
          </Link>
          <Link href="/protected" className={navLinkClass}>
            Protected
          </Link>
          <Link href="/auth/login" className={navLinkClass}>
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

