import { Link } from "lucide-react";
import Image from "next/image";
import localFont from "next/dist/compiled/@next/font/dist/local";
import { cn } from "@/lib/utils";
const headingFont = localFont({ src: "../public/fonts/font.woff2" });
function Logo() {
  return (
    <Link>
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        <p className={cn("text-lg text-neutral-700 pb-1", headingFont.className)}></p>
      </div>
    </Link>
  );
}

export default Logo;
