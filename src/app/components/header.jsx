// components/Header.js

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">
            UniqueHeader
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button (optional) */}
        <div className="md:hidden">
          {/* You could add a mobile menu button here */}
        </div>
      </div>
    </header>
  );
}
