"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SalesLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", path: "/sales" },
    { name: "Leads", path: "/sales/leads" },
    { name: "Customers", path: "/sales/customers" },
    { name: "Pipeline", path: "/sales/pipeline" },
    { name: "Tasks", path: "/sales/tasks" },
    { name: "Interactions", path: "/sales/Interactions" },
  ];

  return (
    <div className="flex min-h-screen bg-blue-50">

      {/* SIDEBAR */}
      <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 shadow-lg">

        <h2 className="text-xl font-bold mb-8 tracking-wide">
          CRM
        </h2>

        <nav className="flex flex-col gap-2">

          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-3 py-2 rounded-lg text-sm transition
                ${
                  pathname === item.path
                    ? "bg-white text-blue-700 font-medium"
                    : "text-blue-100 hover:bg-blue-700 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <div className="bg-white border-b border-blue-100 px-6 py-4 shadow-sm flex justify-between items-center">
          <h1 className="font-semibold text-blue-700">
            Sales Dashboard
          </h1>

          <div className="text-sm text-gray-500">
            Welcome back 👋
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4">
          {children}
        </div>

      </div>
    </div>
  );
}