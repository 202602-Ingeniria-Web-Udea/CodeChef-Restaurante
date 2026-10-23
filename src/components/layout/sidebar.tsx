"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  user: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
    photo?: string | null;
  };
}

export function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname();
  const isAdmin = user?.role === "ADMIN";

  const navItems = [
    {
      title: "Transacciones",
      href: "/dashboard/transactions",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
      visible: true,
    },
    {
      title: "Maestros",
      href: "/dashboard/ingredients",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      visible: true,
    },
    {
      title: "Usuarios",
      href: "/dashboard/users",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      visible: isAdmin,
    },
  ];

  return (
    <aside className="w-64 bg-stone-900 text-stone-100 min-h-screen flex flex-col justify-between border-r border-stone-800 shadow-xl fixed left-0 top-0 bottom-0 z-30">
      <div>
        {/* Brand / Logo */}
        <div className="h-16 flex items-center px-6 border-b border-stone-800 gap-3">
          <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center font-black text-white text-lg shadow-md">
            🔥
          </div>
          <div>
            <h1 className="font-bold text-base tracking-wide text-white leading-tight">CodeChef</h1>
            <p className="text-xs text-stone-400">Restaurante & Inventario</p>
          </div>
        </div>

        {/* User Info Card (PDF requirement: foto del usuario y su nombre) */}
        <div className="p-4 mx-3 my-4 bg-stone-800/80 rounded-xl border border-stone-700/60 flex items-center gap-3">
          {user?.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.photo}
              alt={user.name || "Usuario"}
              className="w-11 h-11 rounded-full object-cover border-2 border-orange-500 shadow"
            />
          ) : (
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-bold text-base flex items-center justify-center shadow">
              {(user?.name || "U").charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white truncate" title={user?.name || ""}>
              {user?.name || "Usuario"}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={cn(
                  "text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                  isAdmin ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                )}
              >
                {user?.role || "USER"}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="px-3 space-y-1.5" aria-label="Navegación principal">
          {navItems
            .filter((item) => item.visible)
            .map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-orange-600 text-white shadow-sm"
                      : "text-stone-300 hover:bg-stone-800 hover:text-white"
                  )}
                >
                  <span className={cn(isActive ? "text-white" : "text-stone-400")}>
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </Link>
              );
            })}
        </nav>
      </div>

      {/* Logout button */}
      <div className="p-4 border-t border-stone-800">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-stone-300 hover:bg-red-500/10 hover:text-red-400 border border-transparent hover:border-red-500/20 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Cerrar sesión</span>
        </button>
      </div>
    </aside>
  );
}
