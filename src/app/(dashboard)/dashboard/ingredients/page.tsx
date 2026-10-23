import { auth } from "@/lib/auth";

export default async function IngredientsPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-850">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Gestión de Maestros</h1>
          <p className="text-sm text-stone-400 mt-1">
            Administración de ingredientes y materiales del restaurante.
          </p>
        </div>

        {isAdmin && (
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md transition"
          >
            <span>+ Agregar Maestro</span>
          </button>
        )}
      </div>

      <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-850 text-center">
        <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl mb-3">
          📦
        </div>
        <h2 className="text-base font-semibold text-white">Catálogo de Maestros / Ingredientes</h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto mt-1">
          {isAdmin
            ? "Tienes permisos de Administrador para crear y gestionar maestros."
            : "Acceso en modo lectura para usuarios estándar."}
        </p>
      </div>
    </div>
  );
}
