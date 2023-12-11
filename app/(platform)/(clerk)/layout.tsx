import exp from "constants";

function ClerkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex items-center justify-center w-screen">
      {children}
    </div>
  );
}
export default ClerkLayout;
