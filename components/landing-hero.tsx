"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LandingHero() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  const ctaClass =
    "rounded-full px-4 py-1.5 border border-white text-white transition-colors duration-200 hover:bg-[#E08E10] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
        {/* Left */}
        <div>
          <h1 className="text-5xl font-medium leading-tight md:text-6xl">
            Hello!
            <br />
            Welcome to AIAvatar
          </h1>

          <div className="mt-8 flex gap-6">
            <Link href="/auth/login" className={ctaClass}>
              Login
            </Link>
            <Link href="/protected" className={ctaClass}>
              Sign up
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="mx-auto w-full max-w-md">
          <div className="relative aspect-square animate-float">
            <div className="absolute inset-0 border-4 border-white" />
            <div className="absolute inset-8 border border-white/25" />

            <div className="absolute inset-0 grid place-items-center">
              <Image
                src="/robot-head.png"
                alt="AI Avatar"
                width={360}
                height={360}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

