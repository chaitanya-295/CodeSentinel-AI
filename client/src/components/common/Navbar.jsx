import React from "react";
import logo from "../../assets/logo3.png";
import { FiGithub, FiMenu, FiX, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
    const navigate = useNavigate();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, loading, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        setMobileMenuOpen(false);
        navigate("/");
    };


    return (
        <nav className="sticky top-0 z-50 bg-white backdrop-blur-md scroll-px-2 border-b border-slate-200" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-2">
                <div className="flex items-center justify-between gap-4">

                    {/* Logo + Brand */}
                    <Link
                        to="/"
                        className="flex items-center cursor-pointer"
                    >
                        <img
                            src={logo}
                            alt="CodeSentinel Logo"
                            className="w-15 h-15 sm:w-15 sm:h-15 object-contain"
                        />

                        <h1 className="text-lg sm:text-xl font-bold text-black">
                            Code<span className="text-cyan-400">Sentinel</span>
                            <span className="text-black-500"> - AI</span>
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2 sm:gap-4">
                        {!loading && (
                            <>
                                {user ? (
                                    <>
                                        {/* Profile */}
                                        <Link
                                            to="/profile"
                                            className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                                        >
                                            {user.avatar ? (
                                                <img
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    className="w-8 h-8 rounded-full border border-slate-700"
                                                />
                                            ) : (
                                                <FiUser size={18} />
                                            )}
                                        </Link>

                                        {/* Dashboard */}
                                        <Link
                                            to="/dashboard"
                                            className="w-28 sm:w-32 px-4 py-2 text-sm text-center font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition"
                                        >
                                            Dashboard
                                        </Link>

                                        {/* Logout */}
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="hidden sm:block w-24 sm:w-28 px-4 py-2 text-sm text-center font-medium text-black-200 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        {/* GitHub */}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                window.location.href = "http://localhost:8000/api/auth/github";
                                            }}
                                            className="hidden sm:flex w-10 sm:w-12 h-10 items-center justify-center text-slate-800 rounded-lg hover:text-cyan-400 transition">
                                            <FiGithub size={22} />
                                        </button>

                                        {/* Get Started */}
                                        <Link
                                            to="/signup"
                                            className="w-28 sm:w-32 px-4 py-2 text-sm text-center font-semibold text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition"
                                        >
                                            Get Started
                                        </Link>

                                        {/* Login */}
                                        <Link
                                            to="/login"
                                            className="hidden sm:block w-24 sm:w-28 px-4 py-2 text-sm text-center font-medium text-black-200 border border-slate-700 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
                                        >
                                            Login
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="md:hidden text-slate-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <FiX size={24} />
                        ) : (
                            <FiMenu size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className={`md:hidden overflow-hidden transition-all duratioin-300 ease-out ${mobileMenuOpen
                        ? "max-h-[500px] opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="py-5 border-t border-slate-300">
                            <div className="flex flex-col gap-4">

                                {!loading && (
                                    <>
                                        {user ? (
                                            <>
                                                <Link
                                                    to="/dashboard"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`pb-5 border-b border-slate-300 text-slate-700 text-center hover:text-cyan-400 transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    Dashboard
                                                </Link>

                                                <Link
                                                    to="/profile"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`pb-5 border-b border-slate-300 text-center gap-2 text-slate-700 hover:text-cyan-400 transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    Profile
                                                </Link>

                                                <button
                                                    type="button"
                                                    onClick={handleLogout}
                                                    className={`flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-300 hover:bg-cyan-400 text-slate-950 font-semibold transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    <FiLogOut size={18} />
                                                    Logout
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Link
                                                    to="/signup"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`pb-5 border-b border-slate-300 text-slate-800 text-center hover:text-cyan-400 transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    Get Started
                                                </Link>

                                                <Link
                                                    onClick={() => {
                                                        setMobileMenuOpen(false);
                                                        window.location.href = "http://localhost:8000/api/auth/github";
                                                    }}
                                                    className={`flex items-center justify-center pb-5 gap-2 text-slate-700 hover:text-cyan-400 border-b border-slate-300 transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    <FiGithub size={23} />
                                                    Github
                                                </Link>

                                                <Link
                                                    to="/login"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`flex items-center justify-center px-5 py-3 rounded-lg bg-cyan-300 hover:bg-cyan-400 text-slate-950 font-semibold transition-all duration-300 delay-100 ${mobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                                                >
                                                    <FiLogIn size={18} />
                                                    Login
                                                </Link>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
}

export default Navbar;
