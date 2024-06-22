import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="absolute inset-0 flex flex-col">
      <nav className="flex items-center justify-end border-b bg-background p-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/locations">Locations</Link>
        </div>
      </nav>

      <div className="flex grow">{children}</div>
    </div>
  );
}
