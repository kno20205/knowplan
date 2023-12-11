import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full h-20 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size={"sm"} variant="outline">
            Privacy Policy
          </Button>
          <Button size={"sm"}>Terms of Service</Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
