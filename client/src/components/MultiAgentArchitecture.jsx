import React from "react";
import {
    FiGithub,
    FiCpu,
    FiShield,
    FiAlertCircle,
    FiCode,
    FiPackage,
    FiZap,
    FiFileText,
} from "react-icons/fi";

function MultiAgentArchitecture() {
    return (
        <section className="bg-[#020617] text-white py-20 sm:py-24">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">

                    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400">
                        Multi-Agent Architecture
                    </p>

                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                        One codebase.
                        <span className="text-cyan-400">
                            {" "}Multiple AI agents.
                        </span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-slate-400 leading-7">
                        Specialized AI agents work together to analyze your
                        code from multiple perspectives.
                    </p>

                </div>


                {/* Architecture */}
                <div className="mt-12 rounded-2xl border border-slate-800 bg-[#080c14] p-6 sm:p-8">

                    {/* INPUT */}
                    <div className="flex justify-center">

                        <ArchitectureNode
                            icon={<FiGithub />}
                            title="Your Code"
                            subtitle="GitHub / ZIP / Snippet"
                        />

                    </div>


                    {/* Arrow */}
                    <div className="flex justify-center py-4">
                        <div className="h-8 w-px bg-slate-700 relative">
                            <span className="absolute -bottom-1 -left-[3px] text-cyan-400">
                                ↓
                            </span>
                        </div>
                    </div>


                    {/* ORCHESTRATOR */}
                    <div className="flex justify-center">

                        <div className="px-7 py-4 rounded-xl border border-cyan-500/50 bg-cyan-500/10">

                            <div className="flex items-center gap-3">

                                <FiCpu className="text-xl text-cyan-400" />

                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-cyan-400">
                                        AI Core
                                    </p>

                                    <h3 className="text-sm font-semibold">
                                        AI Orchestrator
                                    </h3>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Arrow */}
                    <div className="flex justify-center py-4">
                        <div className="h-6 w-px bg-slate-700" />
                    </div>


                    {/* AGENTS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">

                        <Agent
                            icon={<FiShield />}
                            title="Security"
                            subtitle="Vulnerabilities"
                        />

                        <Agent
                            icon={<FiAlertCircle />}
                            title="Bug"
                            subtitle="Logic & Runtime"
                        />

                        <Agent
                            icon={<FiCode />}
                            title="Quality"
                            subtitle="Code Quality"
                        />

                        <Agent
                            icon={<FiPackage />}
                            title="Dependency"
                            subtitle="Package Risks"
                        />

                    </div>


                    {/* Arrow */}
                    <div className="flex justify-center py-4">
                        <div className="h-6 w-px bg-cyan-500" />
                    </div>


                    {/* FIX */}
                    <div className="flex justify-center">

                        <ArchitectureNode
                            icon={<FiZap />}
                            title="Fix Agent"
                            subtitle="AI Fix Suggestions"
                            active
                        />

                    </div>


                    {/* Arrow */}
                    <div className="flex justify-center py-4">
                        <div className="h-6 w-px bg-cyan-500" />
                    </div>


                    {/* REPORT */}
                    <div className="flex justify-center">

                        <ArchitectureNode
                            icon={<FiFileText />}
                            title="Final Report"
                            subtitle="Findings • Severity • Fixes"
                            active
                        />

                    </div>

                </div>

            </div>
        </section>
    );
}


/* Agent */
function Agent({ icon, title, subtitle }) {
    return (
        <div className="group rounded-xl border border-slate-800 bg-[#0b1220] p-4 text-center hover:border-cyan-500/50 transition-all duration-300">

            <div className="mx-auto w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10">
                {icon}
            </div>

            <h3 className="mt-3 text-xs sm:text-sm font-semibold">
                {title} Agent
            </h3>

            <p className="mt-1 text-[10px] sm:text-xs text-slate-500">
                {subtitle}
            </p>

        </div>
    );
}


/* Main Node */
function ArchitectureNode({
    icon,
    title,
    subtitle,
    active = false,
}) {
    return (
        <div
            className={`px-6 py-4 rounded-xl border ${active
                ? "border-cyan-500/50 bg-cyan-500/10"
                : "border-slate-700 bg-[#0b1220]"
                }`}
        >

            <div className="flex items-center gap-3">

                <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${active
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "bg-slate-800 text-slate-400"
                        }`}
                >
                    {icon}
                </div>

                <div>

                    <h3 className="text-sm font-semibold">
                        {title}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                        {subtitle}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default MultiAgentArchitecture;