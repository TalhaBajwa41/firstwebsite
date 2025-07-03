"use client";
import { BellIcon, SunIcon, MoonIcon, CogIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="flex items-center h-16 px-4 font-bold text-xl border-b">
          <span className="text-orange-500">🛒 Larkon</span>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center">
            <span className="ml-2">Widgets</span>
            <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded">9+</span>
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Base UI</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Advanced UI</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Charts</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Forms</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Tables</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Icons</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Maps</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center">
            Badge Menu
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded">1</span>
          </a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Menu Item</a>
          <a href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">Disable Item</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">WELCOME!</h1>
          <div className="flex items-center space-x-4">
            <SunIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <MoonIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <BellIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <CogIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <ClockIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        {/* Alert */}
        <div className="bg-orange-100 border border-orange-300 text-orange-700 p-3 rounded mb-4">
          We regret to inform you that our server is currently experiencing technical difficulties.
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div className="text-orange-500 text-2xl">🛍️</div>
              <div className="text-green-500 text-sm">▲ 2.3% Last Week</div>
            </div>
            <div className="mt-2 text-gray-500 text-sm">Total Orders</div>
            <div className="text-2xl font-bold">13,647</div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div className="text-orange-500 text-2xl">💡</div>
              <div className="text-green-500 text-sm">▲ 8.1% Last Month</div>
            </div>
            <div className="mt-2 text-gray-500 text-sm">New Leads</div>
            <div className="text-2xl font-bold">9,526</div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div className="text-orange-500 text-2xl">📦</div>
              <div className="text-red-500 text-sm">▼ 0.3% Last Month</div>
            </div>
            <div className="mt-2 text-gray-500 text-sm">Deals</div>
            <div className="text-2xl font-bold">976</div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <div className="flex items-center justify-between">
              <div className="text-orange-500 text-2xl">💰</div>
              <div className="text-red-500 text-sm">▼ 10.6% Last Month</div>
            </div>
            <div className="mt-2 text-gray-500 text-sm">Booked Revenue</div>
            <div className="text-2xl font-bold">$123.6k</div>
          </div>
        </div>

        {/* Placeholder for Performance Chart */}
        <div className="mt-6 bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Performance</h2>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            (Chart Placeholder)
          </div>
        </div>
      </main>
    </div>
  );
}
