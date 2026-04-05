"use client";

export default function SalesDashboard() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-800">
          Sales Dashboard
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Track your sales performance and activity
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* LEADS */}
        <div className="relative bg-white/90 backdrop-blur border border-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">

          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-2xl"></div>

          <div className="flex justify-between items-center">
            <h2 className="text-blue-700 text-sm font-semibold tracking-wide">
              Leads
            </h2>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
              +2 today
            </span>
          </div>

          <p className="text-5xl font-bold text-gray-900 mt-4 group-hover:text-blue-700 transition">
            12
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Total leads in pipeline
          </p>
        </div>

        {/* CUSTOMERS */}
        <div className="relative bg-white/90 backdrop-blur border border-green-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">

          <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t-2xl"></div>

          <div className="flex justify-between items-center">
            <h2 className="text-green-700 text-sm font-semibold tracking-wide">
              Customers
            </h2>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
              Active
            </span>
          </div>

          <p className="text-5xl font-bold text-gray-900 mt-4 group-hover:text-green-700 transition">
            5
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Converted clients
          </p>
        </div>

        {/* TASKS */}
        <div className="relative bg-white/90 backdrop-blur border border-yellow-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group">

          <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 rounded-t-2xl"></div>

          <div className="flex justify-between items-center">
            <h2 className="text-yellow-700 text-sm font-semibold tracking-wide">
              Tasks
            </h2>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
              Pending
            </span>
          </div>

          <p className="text-5xl font-bold text-gray-900 mt-4 group-hover:text-yellow-600 transition">
            8
          </p>

          <p className="text-xs text-gray-500 mt-2">
            Tasks to complete
          </p>
        </div>

      </div>

    </div>
  );
}