import React from "react";
import { FiShield, FiCheck } from "react-icons/fi";

function BeforeAfter() {
    return (
        <section className="bg-slate-50 py-10 sm:py-18">
            <div className="max-w-6xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto">

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                        Before & After
                    </p>

                    <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-black">
                        From problem
                        <span className="text-cyan-500">
                            {" "}to solution.
                        </span>
                    </h2>

                    <p className="mt-4 text-gray-500 leading-7">
                        Don't just find the problem. Understand it and get an actionable way to fix it.
                    </p>
                </div>

                {/* Comparison */}
                <div className="mt-7 grid md:grid-cols-2 gap-6">

                    {/* Before */}
                    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 duration-300">

                        <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-red-500" />

                            <span className="text-sm font-semibold">
                                Before CodeSentinel
                            </span>
                        </div>

                        <div className="p-6">

                            <div className="text-xs text-gray-400 mb-4">
                                auth/login.js
                            </div>

                            <pre className="bg-slate-950 text-slate-300 rounded-xl p-5 text-sm leading-7 overflow-x-auto">
                                {`const query = 
          "SELECT * FROM users 
           WHERE email = '" + email + "'";
        
        db.query(query);
                                            `}
                            </pre>

                            <div className="mt-5 flex items-start gap-3 text-sm text-red-600">
                                <FiShield className="mt-0.5 shrink-0" />

                                <p>
                                    Potential SQL injection vulnerability detected.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* After */}
                    <div className="bg-[#020617] text-white border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 duration-300">

                        <div className="px-6 py-4 border-b border-slate-800 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />

                            <span className="text-sm font-semibold">
                                CodeSentinel Suggestion
                            </span>
                        </div>

                        <div className="p-6">

                            <div className="text-xs text-slate-500 mb-4">
                                Recommended Fix
                            </div>

                            <pre className="bg-slate-900 text-slate-300 rounded-xl p-5 text-sm leading-7 overflow-x-auto">
                                {`const query =
          "SELECT * FROM users
           WHERE email = ?";
           
        db.query(query, [email]);`}
                            </pre>

                            <div className="mt-5 flex items-start gap-3 text-sm text-cyan-400">
                                <FiCheck className="mt-0.5 shrink-0" />

                                <p>
                                    Use parameterized queries to prevent user input from becoming executable SQL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeforeAfter;