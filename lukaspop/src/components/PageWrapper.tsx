import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="pt-8 sm:pt-12 md:pt-12 lg:pt-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-4 md:px-6">{children}</div>
    </main>
  );
}
