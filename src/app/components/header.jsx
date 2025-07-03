"use client";
import { BellIcon, MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";


export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Bars3Icon className="h-6 w-6 cursor-pointer md:hidden" />
          <span className="text-xl font-bold">🌟 MyUniqueApp</span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">Dashboard</a>
          <a href="#" className="hover:text-gray-200 transition">Projects</a>
          <a href="#" className="hover:text-gray-200 transition">Team</a>
          <a href="#" className="hover:text-gray-200 transition">Reports</a>
        </nav>

        {/* Right: Search, Notifications, Avatar */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-indigo-500 rounded px-2 py-1">
            <MagnifyingGlassIcon className="h-5 w-5 text-white" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none ml-2 placeholder-white text-sm"
            />
          </div>
          
          {/* Notification */}
          <button className="relative">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-500 rounded-full">3</span>
          </button>

          {/* User Avatar */}
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        </div>
      </div>
    </header>
  );
}
