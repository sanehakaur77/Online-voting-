import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Users, BarChart3, PlusCircle, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/add-parties", label: "Add Parties", icon: <PlusCircle size={20} /> },
    { path: "/parties", label: "Parties", icon: <Users size={20} /> },
    { path: "/results", label: "See Results", icon: <BarChart3 size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* ===== Left Sidebar ===== */}
      <aside className="w-64 h-screen bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-800 shadow-2xl p-6 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center tracking-wide">
            Admin Panel
          </h2>

          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-white/20 text-white shadow-md scale-105"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium text-lg">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-4 text-center">
          <button className="flex items-center justify-center w-full gap-2 text-gray-200 hover:text-white transition-all">
            <LogOut size={18} /> Logout
          </button>
          <p className="text-sm text-gray-300 mt-2">© 2025 Admin System</p>
        </div>
      </aside>

      {/* ===== Right Main Dashboard ===== */}
      <main className="flex-1 p-10 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-indigo-700">Welcome, Admin</h1>
          <div className="bg-white px-5 py-2 rounded-full shadow-md text-gray-700 font-medium">
            Dashboard
          </div>
        </header>

        {/* Content Area */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example cards for visual structure */}
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Total Parties</h2>
            <p className="text-gray-600 text-lg">12 Registered</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Votes Cast</h2>
            <p className="text-gray-600 text-lg">5,432</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">Upcoming Elections</h2>
            <p className="text-gray-600 text-lg">3 Scheduled</p>
          </div>
        </section>

        {/* Bottom section */}
        <div className="mt-10 text-gray-500 text-center text-sm">
         welcome, admin ! you cann delete and add parties
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
