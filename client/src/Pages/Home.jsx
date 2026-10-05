import React, { useState } from "react";
import Hero from "../components/Hero";
import { FiSearch, FiShield, FiZap, FiGitPullRequest, FiFileText, FiAlertCircle, FiGithub, FiCpu, FiPackage, FiCode, FiArrowRight, FiCheck } from "react-icons/fi";
import ProductSections from "../components/ProductSections";
import MultiAgentArchitecture from "../components/MultiAgentArchitecture";

const services = [
    {
        number: "01",
        title: "Analyze Your Code",
        icon: <FiSearch />,
        description: "Understand your codebase, structure, dependencies, and potential problem areas with intelligent AI-powered analysis.",
    },
    {
        number: "02",
        title: "Detect Vulnerabilities",
        icon: <FiShield />,
        description: "Identify security risks, unsafe coding patterns, dependency issues, and vulnerabilities before they reach production.",
    },
    {
        number: "03",
        title: "Find Bugs & Code Smells",
        icon: <FiAlertCircle />,
        description: "Detect logical bugs, inefficient code, duplicated patterns, and maintainability issues that can affect your software.",
    },
    {
        number: "04",
        title: "Generate Intelligent Fixes",
        icon: <FiZap />,
        description: "Get AI-generated solutions with clear explanations so developers can understand the issue and appy the right fix.",
    },
    {
        number: "05",
        title: "Review Pull Requests",
        icon: <FiGitPullRequest />,
        description: "Automatically analyze pull request changes and highlight bugs, security risks, and code quality issues before merging.",
    },
    {
        number: "06",
        title: "Generate Developer Reports",
        icon: <FiFileText />,
        description: "Turn analysis results into clear reports with severity levels, explanations, and actionable recommendations.",
    },
]

function Home() {
    const [activeService, setActiveService] = useState(null);

    const handleClick = (number) => {
        setActiveService(activeService === number ? null : number);
    };

    return (
        <div>
            <Hero />

            {/* What We Do */}
            <section className="bg-white py-18 sm:py-26">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* LEFT */}
                        <div className="lg:sticky lg:top-28 lg:self-start">

                            <p className="text-sm uppercase tracking-[0.25em] text-cyan-600 font-semibold">
                                What We Do
                            </p>

                            <h2 className="mt-6 text-5xl sm:text-6xl lg-text-7xl font-semibold tracking-tight text-black leading-[1.05]">
                                Code
                                <br />
                                <span className="text-cyan-500">
                                    under control.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-md text-gray-500 text-lg leading-8">
                                CodeSentinel AI brings intelligent code analysis, security auditing, and automated fixes into one powerful developer workflow.
                            </p>

                            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-gray-500">
                                <span className="w-10 h-[1px] bg-cyan-500"></span>
                                Analyze
                                <span>•</span>
                                Detect
                                <span>•</span>
                                Fix
                            </div>
                        </div>

                        {/* Right */}
                        <div className="border-t border-gray-200">

                            {services.map((service) => {
                                const isActive =
                                    activeService === service.number;

                                return (
                                    <div
                                        key={service.number}
                                        className="border-b border-gray-200"
                                    >
                                        {/* CLICKABLE ROW */}
                                        <button
                                            onClick={() => handleClick(service.number)}
                                            className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
                                        >
                                            <div className="flex items-center gap-5 sm:gap-6">

                                                {/* NUMBER */}
                                                <span className={`text-sm font-mono transition-colors duration-300 ${isActive
                                                    ? "text-cyan-500"
                                                    : "text-gray-400"
                                                    }`}>
                                                    {service.number}
                                                </span>

                                                {/* ICON */}
                                                <div
                                                    className={`text-xl transition-all duration-300 ${isActive
                                                        ? "text-cyan-500"
                                                        : "text-gray-400 group-hover:text-cyan-500"
                                                        }`}
                                                >
                                                    {service.icon}
                                                </div>

                                                {/* TITLE */}
                                                <h3
                                                    className={`text-lg sm:text-2xl font-medium transition-colors duration-300 ${isActive
                                                        ? "text-black"
                                                        : "text-gray-800 group-hover:text-black"
                                                        }`}
                                                >
                                                    {service.title}
                                                </h3>
                                            </div>

                                            {/* PLUS / MINUS */}
                                            <span
                                                className={`text-2xl font-light transition-all duration-300 ${isActive
                                                    ? "text-cyan-500 rotate-45"
                                                    : "text-gray-300 group-hover:text-cyan-500"
                                                    }`}
                                            >
                                                +
                                            </span>
                                        </button>

                                        {/* DESCRIPTION */}
                                        <div
                                            className={`grid transition-all duration-500 ease-in-out ${isActive
                                                ? "grid-rows-[1fr] opacity-100 pb-7"
                                                : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="pl-[76px] sm:pl-[88px] pr-8">
                                                    <p className="max-w-xl text-sm sm:text-base text-gray-500 leading-7">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

            {/* Multi-Agent Architecture */}
            <section className="bg-[#020617] text-white py-4 sm:py-12 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="max-w-2xl">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-cyan-400">
                            Multi-Agent Architecture
                        </p>

                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
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
                                d="M 500 160 C 500 205, 175 215, 175 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Bug */}
                            <path
                                d="M 500 160 C 500 210, 380 220, 380 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Quality */}
                            <path
                                d="M 500 160 C 500 210, 620 220, 620 275"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="1"
                                strokeDasharray="5 5"
                            />

                            {/* Orchestrator -> Dependency */}
                            <path
                                d="M 500 160 C 500 205, 825 215, 825 275"
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
                        <div className="absolute left-[5%] top-[80px]">

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
                        <div className="absolute left-1/2 -translate-x-1/2 top-[210px] w-[82%]">

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">

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
            </section>

            {/* Security / Code Analysis Results */}
            <section className="bg-white py-20 sm:py-28">
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
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

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

            {/* Before & After */}
            <section className="bg-slate-50 py-20 sm:py-28">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto">

                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                            Before & After
                        </p>

                        <h2 className="mt-5 text-4xl sm:text-5xl font-semibold text-black">
                            From problem
                            <span className="text-cyan-500">
                                {" "}to solution.
                            </span>
                        </h2>

                        <p className="mt-5 text-gray-500 leading-7">
                            Don't just find the problem. Understand it and get an actionable way to fix it.
                        </p>
                    </div>

                    {/* Comparison */}
                    <div className="mt-16 grid md:grid-cols-2 gap-6">

                        {/* Before */}
                        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

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
                        <div className="bg-[#020617] text-white border border-slate-800 rounded-2xl overflow-hidden">

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

            {/* Why CodeSentinel */}
            <section className="bg-white py-24 sm:py-32">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Heading */}
                        <div>

                            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                                Why CodeSentinel
                            </p>

                            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold trackiung-tight text-black">
                                More than a
                                <br />
                                <span className="text-cyan-500">
                                    code scanner.
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-md">
                                CodeSentinel combines intelligent analysis, security insights, explanations, and fixes into one developer-focused workflow.
                            </p>
                        </div>

                        {/* Points */}
                        <div className="border-t border-gray-200">

                            <WhyItem
                                number="01"
                                title="Multiple AI Perspectives"
                                description="Different specialized agents analyze differnet aspects of your code."
                            />

                            <WhyItem
                                number="02"
                                title="Actionable Results"
                                description="Understand the issue, its severity, and what you can do about it."
                            />

                            <WhyItem
                                number="03"
                                title="Developer-Friendly"
                                description="Clear explations insted of confusing security and static-analysis output."
                            />

                            <WhyItem
                                number="04"
                                title="Built for the Workflow"
                                description="Designed around repositories, pull requests, reviews, and fixes."
                            />

                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-white py-8 sm:py-16 px-40">
                <div className="bg-[#020617] items-center justify-center rounded-[40px]">
                    <div className="max-w-5xl mx-auto px-6 text-center py-10">

                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                            Start Building Securely
                        </p>

                        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                            Let AI review your code
                            <br />
                            <span className="text-cyan-400">
                                before production does.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl mx-auto text-slate-400 text-md leading-6">
                            Analyze your codebase, discover hidden risks, and get intelligent recommendations with CodeSentinel AI.
                        </p>

                        <div className="mt-5 flex flex-col sm:flex-row justify-center gap-6">

                            <button className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition flex items-center justify-cennter gap-2">
                                Analyze Your Code
                                <FiArrowRight />
                            </button>

                            <button className="px-5 py-2 rounded-full border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                                <FiGithub />
                                View on GitHub
                            </button>
                        </div>
                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="bg-[#020617] text-white border-t border-slate-800">

                <div className="max-w-6xl mx-auto px-6 py-14">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Brand */}
                        <div className="lg:col-span-2">

                            <h3 className="text-2xl font-bold">
                                Code<span className="text-cyan-400">
                                    Sentinel
                                </span>
                            </h3>

                            <p className="mt-4 max-w-sm text-slate-500 leading-7">
                                AI-powered code auditing that helps developers find vulnerabilities, detect bugs, and ship safer software.
                            </p>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-sm font-semibold text-white">
                                Product
                            </h4>

                            <div className="mt-5 space-y-3 text-sm text-slate-500">

                                <a href="#feature" className="block hover:text-cyan-400 transition">
                                    Features
                                </a>

                                <a href="#how-it-works" className="block hover:text-cyan-400 transition">
                                    How It Works
                                </a>

                                <a href="#analysis" className="block hover:text-cyan-400 transition">
                                    Analysis
                                </a>

                                <a href="#security" className="block hover:text-cyan-400 transition">
                                    Security
                                </a>
                            </div>
                        </div>


                        {/* Resources */}
                        <div>
                            <h4 className="text-sm font-semibold text-white">
                                Resources
                            </h4>

                            <div className="mt-5 space-y-3 text-sm text-slate-500">

                                <a href="#" className="block hover:text-cyan-400 transition">
                                    Documentation
                                </a>

                                <a href="#" className="block hover:text-cyan-400 transition">
                                    GitHub
                                </a>

                                <a href="#" className="block hover:text-cyan-400 transition">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-600">

                        <p>
                            © 2026 CodeSentinel AI. All rights reserved.
                        </p>

                        <p>
                            Analyze • Detect • Fix • Ship
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

{/* Small Node */ }
function Node({ icon, label, sub, active = false }) {
    return (
        <div
            className={`w-48 rounded-xl border p-4 ${active
                ? "border-cyan-400/60 bg-cyan-400/10"
                : "border-slate-700 bg-[#0b1220]"
                }`}
        >
            <div className="flex items-center gap-3">

                <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center
                        ${active
                            ? "bg-cyan-400/20 text-cyan-400"
                            : "bg-slate-800 text-slate-400"
                        }`}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-xs font-semibold">
                        {label}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                        {sub}
                    </p>
                </div>
            </div>
        </div>
    );
}

{/* Agent Node */ }
function AgentNode({ icon, title, text }) {
    return (
        <div className="group rounded-xl border border-slate-800 bg-[#0b1220] p-4 hover:border-cyan-500/50 transition-all duration-300">

            <div className="flex items-center gap-3">

                <div className="w-9 h-9 rounded-g bg-slate-800 flex items-center justify-center taxt-cyan-400 group-hover:bg-cyan-400/10">
                    {icon}
                </div>

                <div>
                    <h3 className="text-xs font-semibold">
                        {title}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-500">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
}

function ResultStat({ number, label, type }) {
    const textColor =
        type === "critical"
            ? "text-red-500"
            : type === "warning"
                ? "text-orange-500"
                : "text-green-500";

    return (
        <div className="p-5 border-r border-gray-200 last:border-r-0">

            <p className={`text-2xl font-semibold ${textColor}`}>
                {number}
            </p>

            <p className="mt-1 text-xs text-gray-400">
                {label}
            </p>
        </div>
    );
}

function Finding({ color, title, file, severity }) {

    const colors = {
        red: "text-red-500 bg-red-50",
        orange: "text-orange-500 bg-orange-50",
        yellow: "text-yellow-600 bg-yellow-50",
    };

    return (
        <div className="p-5 flex items-center justify-between gap-4">

            <div className="flex items-start gap-3">

                <span
                    className={`mt-1 w-2 h-2 rounded-full ${colors[color]
                        .split(" ")[0]
                        .replace("text", "bg")
                        }`}
                />

                <div>

                    <p className="text-sm font-medium text-gray-900">
                        {title}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                        {file}
                    </p>
                </div>
            </div>

            <span className={`shrink-0 px-2.5 py-1 rounded-full text-xs ${colors[color]}`}>
                {severity}
            </span>
        </div>
    );
}

function WhyItem({ number, title, description }) {
    return (
        <div className="py-7 border-b border-gray-200 flex gap-6">

            <span className="text-sm font-mono text-cyan-500">
                {number}
            </span>

            <div>
                <h3 className="text-lg font-semibold text-gray-900">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6 max-w-lg">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Home;