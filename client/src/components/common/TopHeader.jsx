import React from "react";
import { FiBell, FiPlus, FiSearch, FiMenu, } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function TopHeader() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <header className="h-14 border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between sticky top-0 z-40 shadow">
            {/* Mobile Hamburger + Brand icon + */}
            <div className="flex items-center gap-2 sm:gap-3">
                <button
                    type="button"
                    className="p-2 rounded-lg text-slate-900 hover:text-cyan-400 hover:bg-slate-800 md:hidden transition-colors"
                    title="Toggle Navigation Menu"
                >
                    <FiMenu size={21} />
                </button>

                <div className="h-8 w-14 rounded-lg bg-cyan-300 flex items-center justify-center font-bold shadow-md shadow-cyan-500/25 text-base shrink-0 select-none text-slate-950">
                    C-AI
                </div>

                <Link
                    to="/dashboard"
                    className="font-bold text-base sm:text-lg text-slate-700 whitespace-nowrap"
                >
                    CodeSentinel - AI
                </Link>
            </div>

            {/* Global Search Bar (hidden on extra small screens) */}
            <div className="flex-1 max-w-xl mx-4 hidden sm:block">
                <div className="relative">
                    <FiSearch className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search projects, issues..."
                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                </div>
            </div>

            {/* Action buttons & Avatar */}
            <div className="flex items-center gap-2 sm:gap-3">
                {/* Create Button with Dropdown */}
                <button
                    type="button"
                    className="flex itmes-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-300 hover:bg-cyan-500 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-600/30 transition-all hover:scale-[1.02] "
                >
                    <span>Analysis</span>
                    <FiPlus className="h-4 w-4" />
                </button>

                {/* Notificatin Bell with Dropdown */}
                <button
                    type="button"
                    className="p-2 text-slate-700 hover:text-cyan-400 rounded-lg hover:bg-slate-200/60 transition-colors relative"
                    title="Notifications"
                >
                    <FiBell className="h-4 w-4" />
                    <span className="absolute top-1 right-1 h-3 w-3 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">
                        3
                    </span>
                </button>

                {/* User avatar with dropdown */}
                <div className="relative pl-2 border-l border-slate-800">
                    <button
                        type="button"
                        title="View Profile"
                        className="flex items-center focus:outline-none focus:ring-2 focus:right-cyan-500/50 rounded-full"
                    >
                        {user?.avatar ? (
                            <img
                                src={user.avatar}
                                alt={user?.name || 'User'}
                                className="h-8 w-8 rounded-full object-cover ring-2 ring-cyan-300/40 hover:ring-cyan-500 cursor-pointer transition-all"
                            />
                        ) : (
                            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 font-bold text-xs flex items-center justify-center ring-2 ring-cyan-300/40 hover:ring-cyan-500 cursor-pointer">
                                {(user?.name || user?.email || 'U').charAt(0).toUpperCase()}
                            </div>
                        )}
                    </button>
                </div>

                {/* Logout */}
                <button
                    type="button"
                    onClick={handleLogout}
                    className="hidden sm:block text-xs font-medium text-slate-400 hover:text-red-400 transition-colors"
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

export default TopHeader;