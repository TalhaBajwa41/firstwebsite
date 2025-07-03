"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BellIcon,
  SunIcon,
  MoonIcon,
  CogIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="flex items-center h-16 px-4 font-bold text-xl border-b">
          <span className="text-black">🛒 Larkon</span>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <Link
            href="#"
            className="text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center"
          >
            <span className="ml-2">Widgets</span>
            <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded">
              9+
            </span>
          </Link>

          {/* Section Label */}
          <p className="text-xs font-semibold text-gray-500 uppercase mt-4 mb-2 px-2">
            General
          </p>

          {/* Dropdown Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center justify-between"
          >
            <span>Advance UI</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                open ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {open && (
            <div className="ml-4 flex flex-col space-y-1">
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Buttons
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Cards
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Modals
              </Link>
            </div>
          )}

          {/* Dropdown Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center justify-between"
          >
            <span>Base UI</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                open ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {open && (
            <div className="ml-4 flex flex-col space-y-1">
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Rating
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Sweet Alert
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Sweet Swiper
              </Link>
            </div>
          )}
          {/* Dropdown Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center justify-between"
          >
            <span>chart</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                open ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {open && (
            <div className="ml-4 flex flex-col space-y-1">
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Area 
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Bar 
              </Link>
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Candlestick
              </Link>
                           
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                line
              </Link>
              
              <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
                Columb
              </Link>

            </div>
          )}
          <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
            Forms
          </Link>
          <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
            Tables
          </Link>
          <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
            Icons
          </Link>
          <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
            Maps
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:bg-gray-200 p-2 rounded flex items-center"
          >
            Badge Menu
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              1
            </span>
          </Link>
          <Link href="#" className="text-gray-700 hover:bg-gray-200 p-2 rounded">
            Menu Item
          </Link>
          <Link href="#" className="text-gray-400 cursor-not-allowed p-2 rounded">
            Disable Item
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-x2 font-semibold">WELCOME!</h1>
          <div className="flex items-center space-x-4">
            <SunIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <MoonIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <BellIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <CogIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <ClockIcon className="h-5 w-5 text-gray-500 cursor-pointer" />
            <Image
              src="https://i.pravatar.cc/40"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Alert */}
        <div className="bg-white border border-green-900 text-black p-3 rounded mb-4">
          Welcome to a unique stock exchange web.
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

        {/* Performance Chart */}
        <div className="mt-6 p-6 rounded shadow">
          <h2 className="text-black text-lg font-semibold mb-2">Basic Area chart</h2>
          <div className="bg-white rounded flex items-center justify-center text-black">
            <img src="https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=1024x1024&w=is&k=20&c=AfDUACB1NMYPpuvEgEgQDUNt2rMuCsPoLnfH0LSYs1s=" alt="" className="h-auto w-auto"/>
          </div>
        </div>
      </main>
    </div>
  );
}
