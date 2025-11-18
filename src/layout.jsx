// React Layout Component
// Metadata configuration should be handled via React Helmet or in public/index.html

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased bg-background text-foreground">
      {children}
    </div>
  );
}
