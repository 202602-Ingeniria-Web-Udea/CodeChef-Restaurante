import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function UsersPage() {
  const session = await auth();

  // Regla estricta del proyecto: Solo rol ADMIN puede acceder
  if (session?.user?.role !== "ADMIN") {
    redirect("/dashboard/transactions");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-850">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Gestión de Usuarios</h1>
          <p className="text-sm text-stone-400 mt-1">
            Administración de cuentas y asignación de roles (ADMIN / USER).
          </p>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-850 text-center">
        <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mb-3">
          👥
        </div>
        <h2 className="text-base font-semibold text-white">Módulo de Administración de Usuarios</h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto mt-1">
          Acceso autorizado para el administrador <span className="text-orange-400 font-medium">{session.user.name}</span>.
        </p>
      </div>
    </div>
  );
}
