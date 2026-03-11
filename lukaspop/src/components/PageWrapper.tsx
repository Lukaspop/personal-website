import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="pt-24">
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </main>
  );
}
