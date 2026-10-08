import React from "react";
import { FiShield, FiZap, FiFileText, FiAlertCircle, FiGithub, FiCpu, FiPackage, FiCode, FiArrowDown } from "react-icons/fi";
import Node from "../architecture.jsx/Node";
import AgentNode from "../architecture.jsx/AgentNode";

function MultiAgentArchitecture() {
    return (
        <section className="bg-[#020617] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400">
                        Multi-Agent Architecture
                    </p>

                    <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                        One codebase
                        <br />
                        <span className="text-cyan-400">
                            Multipe AI perspectives.
                        </span>
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-slate-400 leading-7">
                        CodeSentinel coordinates specialized AI agents, each focused on a different aspect of your software.
                    </p>
                </div>

                {/* ===================================================== */}
                {/* DESKTOP ARCHITECTURE                                  */}
                {/* ===================================================== */}
                <div className="hidden lg:block">
                    {/* Architecture Canvas */}
                    <div className="relative mt-6 min-h-[480px] max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-[#080c14] overflow-hidden">

                        {/* Backgroud grid */}
                        <div
                            className="absolute inset-0 opacity-[0.07]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                                backgroundSize: "32px 32px"
                            }}
                        />
                        {/* SVG Connections */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            viewBox="0 0 1000 600"
                            preserveAspectRatio="none"
                        >

                            {/* Input -> Orchestrator */}
                            <path
                                d="M 225 125 C 330 125, 370 125, 410 125"
                                fill="none"
                                stroke="#64748b"
                                strokeWidth="1.2"
                                markerEnd="url(#arrow)"
                            />

                            {/* Orchestrator -> Security */}
                            <path
                                d="M 500 160 C 500 215, 150 215, 120 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Bug */}
                            <path
                                d="M 500 160 C 500 210, 380 200, 300 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Quality */}
                            <path
                                d="M 500 160 C 500 210, 500 220, 500 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Dependency */}
                            <path
                                d="M 500 160 C 500 205, 725 215, 680 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Performance */}
                            <path
                                d="M 500 160 C 500 205, 825 215, 870 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Agents -> Fix */}
                            <path
                                d="M 500 340 L 500 400"
                                fill="none"
                                stroke="#06b6d4"
                                strokeWidth="1.2"
                                strokeDasharray="6 6"
                            />

                            {/* Fix -> Report */}
                            <path
                                d="M 500 485 L 500 525"
                                fill="none"
                                stroke="#06b6d4"
                                strokeWidth="1.2"
                            />

                            <defs>
                                <marker
                                    id="arrow"
                                    markerWidth="7"
                                    markerHeight="7"
                                    refX="6"
                                    refY="3"
                                    orient="auto"
                                >
                                    <path
                                        d="M0,0 L0,6 L6,3 z"
                                        fill="#64748b"
                                    />
                                </marker>
                            </defs>
                        </svg>

                        {/* Input Node */}
                        <div className="absolute left-[5%] top-[65px]">

                            <Node
                                icon={<FiGithub />}
                                label="Code Repository"
                                sub="Github / ZIP / Snippets"
                            />
                        </div>

                        {/* Orchestrator */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[50px]">
                            <div className="relative">

                                <div className="absolute -inset-3 rounded-xl bg-cyan-500/5 blur-lg" />

                                <div className="relative w-44 rounded-lg border border-cyan-500/50 bg-[#0b1220] p-3 shadow-[0_0_30px_rgba(6,182,212,0.08)]">

                                    <div className="flex items-center gap-2">

                                        <div className="w-8 h-8 rounded-md bg-cyan-400/10 flex items-center justify-center">
                                            <FiCpu className="text-cyan-400 text-lg" />
                                        </div>

                                        <div>
                                            <p className="text-[8px] uppercase tracking-widest text-cyan-400">
                                                Core Engine
                                            </p>

                                            <h3 className="mt-1 text-xs font-semibold text-white">
                                                AI Orchestrator
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center gap-1.5 text-[9px] text-slate-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Coordinating agents
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Agents */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[210px] w-[90%]">

                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">

                                <AgentNode
                                    icon={<FiShield />}
                                    title="Security Agent"
                                    text="Detects vulnerabilities"
                                />

                                <AgentNode
                                    icon={<FiAlertCircle />}
                                    title="Bug Agent"
                                    text="Logic & Runtime"
                                />

                                <AgentNode
                                    icon={<FiCode />}
                                    title="Quality Agent"
                                    text="Code Quality"
                                />

                                <AgentNode
                                    icon={<FiPackage />}
                                    title="Dependency Agent"
                                    text="Package Risks"
                                />

                                <AgentNode
                                    icon={<FiZap />}
                                    title="Performance Agent"
                                    text="Performance Issues"
                                />
                            </div>
                        </div>

                        {/* Fix */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[315px]">

                            <Node
                                icon={<FiZap />}
                                label="Fix Agent"
                                sub="AI Suggestions"
                                active
                                small
                            />
                        </div>

                        {/* Report */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-[420px] w-40 h-20">

                            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-700 bg-[#0b1220]">

                                <FiFileText className="text-cyan-400 text-sm" />

                                <div>
                                    <p className="text-[12px] font-semibold">
                                        Final Report
                                    </p>

                                    <p className="text-[10px] text-slate-500">
                                        Findings • Severity • Fixes
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ===================================================== */}
                {/* TABLET + MOBILE ARCHITECTURE                         */}
                {/* ===================================================== */}
                <div className="lg:hidden mt-10">

                    <div className="relative max-w-2xl mx-auto rounded-2xl border border-slate-800 bg-[#080c14] p-4 sm:p-6 overflow-hidden">

                        {/* Backgorund  Grid */}
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
                                backgroundSize: "28px 28px",
                            }}
                        />

                        <div className="relative z-10 flex flex-col items-center">

                            {/* Repository */}

                            <Node
                                icon={<FiGithub />}
                                label="Code Repository"
                                sub="GitHub / ZIP / Snippets"
                            />

                            {/* Arrow */}
                            <MobileArrow />

                            {/* Orchestrator */}
                            <div className="relative w-full max-w-xs">

                                <div className="absolute -inset-3 rounded-xl bg-cyan-500/5 blur-lg" />

                                <div className="relative rounded-xl border border-cyan-500/50  bg-[#0b1220] p-4 shadow-[0_0_3-px_rgba(6,182,212,0.08)]">

                                    <div className="flex items-center gap-3">

                                        <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center shrink-0">
                                            <FiCpu className="text-cyan-400 text-xl" />
                                        </div>

                                        <div>
                                            <p className="text-[9px] uppercase tracking-widest text-cyan-400">
                                                Core Engine
                                            </p>

                                            <h3 className="mt-1 text-sm font-semibold">
                                                AI Orchestrator
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Coordinating agents
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <MobileArrow />

                            {/* Agents */}
                            <div className="w-full">

                                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">
                                    Specialized Agents
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                    <AgentNode
                                        icon={<FiShield />}
                                        title="Security Agent"
                                        text="Detects vulnerabilities"
                                    />

                                    <AgentNode
                                        icon={<FiAlertCircle />}
                                        title="Bug Agent"
                                        text="Logic & Runtime Errors"
                                    />

                                    <AgentNode
                                        icon={<FiCode />}
                                        title="Quality Agent"
                                        text="Code Quality"
                                    />

                                    <AgentNode
                                        icon={<FiPackage />}
                                        title="Dependency Agent"
                                        text="Package Risks"
                                    />

                                    <AgentNode
                                        icon={<FiZap />}
                                        title="Performance Agent"
                                        text="Performance Issues"
                                    />

                                </div>
                            </div>

                            {/* Arrow */}
                            <MobileArrow />

                            {/* Fix Agent */}
                            <Node
                                icon={<FiZap />}
                                label="Fix Agent"
                                sub="AI Suggestions"
                                active
                                small
                            />

                            {/* Arrow */}
                            <MobileArrow />

                            {/* Final Report */}
                            <div className="w-full max-w-xs flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-slate-700 bg-[#0b1220]">

                                <FiFileText className="text-cyan-400 text-lg shrink-0" />

                                <div>
                                    <p className="text-sm font-semibold">
                                        Final Report
                                    </p>

                                    <p className="text-[10px] text-slate-500">
                                        Findings • Severity • Fixes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

// Helper: Mobile Arrow
function MobileArrow() {
    return (
        <div className="py-3 flex justify-center">
            <div className="w-8 h-8 rounded-full border border-slate-700 bg-[#0b1220] flex items-center justify-center">
                <FiArrowDown className="text-cyan-400 text-sm" />
            </div>
        </div>
    );
}

export default MultiAgentArchitecture;