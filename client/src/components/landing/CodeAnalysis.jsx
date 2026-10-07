import React from "react";
import { FiArrowRight } from "react-icons/fi";
import ResultStat from "./ResultStat";
import Finding from "./Finding";

function CodeAnalysis() {
    return (
        <section className="bg-white py-8 sm:py-16">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                            Code Analysis
                        </p>

                        <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-black tracking-tight">
                            See what your code
                            <span className="text-cyan-500">
                                {" "}is hiding.
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-500 text-lg leading-8">
                            CodeSentinel turns complex code analysis into clear, actionable findings that developers can understand and fix.
                        </p>

                        <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-black hover:text-cyan-500 transition">
                            Explore Analysis
                            <FiArrowRight />
                        </button>
                    </div>

                    {/* Right - Analysis Preview */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg">

                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">

                            <div>
                                <p className="text-xs text-gray-400">
                                    REPOSITORY
                                </p>

                                <p className="mt-1 text-sm font-semibold">
                                    my-project
                                </p>
                            </div>

                            <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-600">
                                Analysis Complete
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 border-b border-gray-200">

                            <ResultStat
                                number="03"
                                label="Critical"
                                type="critical"
                            />

                            <ResultStat
                                number="07"
                                label="Warnings"
                                type="warning"
                            />

                            <ResultStat
                                number="94%"
                                label="Quality"
                                type="success"
                            />

                        </div>

                        {/* Findings */}
                        <div className="divide-y divide-gray-100">

                            <Finding
                                color="red"
                                title="SQL Injection Risk"
                                file="auth/login.js : 42"
                                severity="Critical"
                            />

                            <Finding
                                color="orange"
                                title="Unused Dependency"
                                file="package.json : 18"
                                severity="Warning"
                            />

                            <Finding
                                color="yellow"
                                title="Complex Function"
                                file="services/user.js : 87"
                                severity="Review"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CodeAnalysis;