type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-3 sm:px-6 ${className ?? ""}`}>
      {children}
    </div>
  );
}
