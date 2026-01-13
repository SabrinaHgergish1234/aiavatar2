// components/header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          AIAVATAR
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/notes" className="hover:underline">
            Notes
          </Link>
          <Link href="/protected" className="hover:underline">
            Protected
          </Link>
          <Link href="/auth/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
