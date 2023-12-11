import { ClerkProvider } from "@clerk/nextjs";
import exp from "constants";

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
export default PlatformLayout;
