

// components/tutorial/footer.tsx
import Link from "next/link";

export default function Footer() {
  const navLinkClass =
    "rounded-full px-4 py-1.5 transition-colors duration-200 hover:bg-[#E08E10] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <footer className="w-full border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">© 2026 AIAVATAR. All rights reserved.</p>

        <nav className="flex items-center gap-4">
          <Link href="/privacy" className={navLinkClass}>
            Privacy
          </Link>
          <Link href="/terms" className={navLinkClass}>
            Terms
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}


