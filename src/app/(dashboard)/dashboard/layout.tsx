import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex">
      {/* Sidebar fijo a la izquierda */}
      <Sidebar user={session.user} />

      {/* Contenedor principal con margen izquierdo para no sobreponerse al sidebar fijo */}
      <div className="flex-1 ml-64 min-h-screen flex flex-col bg-stone-950">
        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
