import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/fonts/font.woff2" });
function Logo() {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <p className={cn("text-xl text-neutral-700 ", headingFont.className)}>
          KnowPlan
        </p>
      </div>
    </Link>
  );
}

export default Logo;
