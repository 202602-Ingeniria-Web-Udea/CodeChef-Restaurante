import { auth } from "@/lib/auth";

export default async function TransactionsPage() {
  const session = await auth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-850">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Gestión de Transacciones</h1>
          <p className="text-sm text-stone-400 mt-1">
            Visualiza los movimientos de inventario y saldos diarios por maestro.
          </p>
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-850 text-center">
        <div className="w-12 h-12 mx-auto rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl mb-3">
          📊
        </div>
        <h2 className="text-base font-semibold text-white">Módulo de Transacciones de Inventario</h2>
        <p className="text-xs text-stone-400 max-w-md mx-auto mt-1">
          Sesión activa como: <span className="text-orange-400 font-medium">{session?.user?.name}</span> ({session?.user?.role})
        </p>
      </div>
    </div>
  );
}
