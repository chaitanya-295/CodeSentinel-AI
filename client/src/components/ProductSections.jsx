import React from "react";
import {
    FiShield,
    FiCode,
    FiPackage,
    FiGitPullRequest,
    FiArrowRight,
    FiCheck,
    FiGithub,
    FiAlertCircle,
} from "react-icons/fi";

function ProductSections() {
    return (
        <>
            {/* =====================================================
                5. MULTI-AGENT ARCHITECTURE
            ===================================================== */}
            <section className="bg-[#020617] text-white py-24 sm:py-32">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                            Multi-Agent Architecture
                        </p>

                        <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                            One codebase.
                            <br />
                            <span className="text-cyan-400">
                                Multiple AI perspectives.
                            </span>
                        </h2>

                        <p className="mt-6 text-slate-400 text-lg leading-8">
                            CodeSentinel coordinates specialized AI agents,
                            each focused on a different aspect of your
                            software.
                        </p>
                    </div>

                    {/* Architecture */}
                    <div className="mt-20">

                        {/* Main Orchestrator */}
                        <div className="flex justify-center">
                            <div className="px-8 py-5 border border-cyan-500/50 rounded-xl bg-slate-900 text-center">
                                <p className="text-xs text-cyan-400 uppercase tracking-widest">
                                    Central Intelligence
                                </p>

                                <h3 className="mt-2 text-xl font-semibold">
                                    AI Orchestrator
                                </h3>
                            </div>
                        </div>

                        {/* Line */}
                        <div className="hidden md:block w-px h-12 bg-slate-700 mx-auto" />

                        {/* Agents */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                            <Agent
                                icon={<FiShield />}
                                title="Security Agent"
                                description="Finds vulnerabilities and unsafe coding patterns."
                            />

                            <Agent
                                icon={<FiAlertCircle />}
                                title="Bug Agent"
                                description="Detects logical errors and potential runtime issues."
                            />

                            <Agent
                                icon={<FiCode />}
                                title="Quality Agent"
                                description="Analyzes maintainability and coding practices."
                            />

                            <Agent
                                icon={<FiPackage />}
                                title="Dependency Agent"
                                description="Checks dependencies and potential risks."
                            />

                        </div>

                        {/* Result */}
                        <div className="flex justify-center mt-10">
                            <div className="flex items-center gap-3 px-6 py-3 border border-slate-700 rounded-full text-sm text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                Unified Code Analysis
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                6. SECURITY / CODE ANALYSIS RESULTS
            ===================================================== */}
            <section className="bg-white py-24 sm:py-32">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                                Code Analysis
                            </p>

                            <h2 className="mt-5 text-4xl sm:text-5xl font-semibold text-black tracking-tight">
                                See what your code
                                <span className="text-cyan-500">
                                    {" "}is hiding.
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-500 text-lg leading-8">
                                CodeSentinel turns complex code analysis into
                                clear, actionable findings that developers can
                                understand and fix.
                            </p>

                            <button className="mt-8 flex items-center gap-2 text-sm font-semibold text-black hover:text-cyan-500 transition">
                                Explore Analysis
                                <FiArrowRight />
                            </button>
                        </div>


                        {/* RIGHT - ANALYSIS PREVIEW */}
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


            {/* =====================================================
                7. BEFORE VS AFTER
            ===================================================== */}
            <section className="bg-slate-50 py-24 sm:py-32">
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
                            Don't just find the problem. Understand it and
                            get an actionable way to fix it.
                        </p>

                    </div>


                    {/* Comparison */}
                    <div className="mt-16 grid md:grid-cols-2 gap-6">

                        {/* BEFORE */}
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

db.query(query);`}
                                </pre>

                                <div className="mt-5 flex items-start gap-3 text-sm text-red-600">
                                    <FiShield className="mt-0.5 shrink-0" />

                                    <p>
                                        Potential SQL injection vulnerability
                                        detected.
                                    </p>
                                </div>

                            </div>
                        </div>


                        {/* AFTER */}
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
                                        Use parameterized queries to prevent
                                        user input from becoming executable SQL.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                8. WHY CODESENTINEL
            ===================================================== */}
            <section className="bg-white py-24 sm:py-32">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16">

                        {/* Heading */}
                        <div>

                            <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                                Why CodeSentinel
                            </p>

                            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-black">
                                More than a
                                <br />
                                <span className="text-cyan-500">
                                    code scanner.
                                </span>
                            </h2>

                            <p className="mt-6 text-gray-500 text-lg leading-8 max-w-md">
                                CodeSentinel combines intelligent analysis,
                                security insights, explanations, and fixes
                                into one developer-focused workflow.
                            </p>

                        </div>


                        {/* Points */}
                        <div className="border-t border-gray-200">

                            <WhyItem
                                number="01"
                                title="Multiple AI Perspectives"
                                description="Different specialized agents analyze different aspects of your code."
                            />

                            <WhyItem
                                number="02"
                                title="Actionable Results"
                                description="Understand the issue, its severity, and what you can do about it."
                            />

                            <WhyItem
                                number="03"
                                title="Developer-Friendly"
                                description="Clear explanations instead of confusing security and static-analysis output."
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


            {/* =====================================================
                9. CTA
            ===================================================== */}
            <section className="bg-[#020617] text-white py-24 sm:py-32">
                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                        Start Building Securely
                    </p>

                    <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                        Let AI review your code
                        <br />
                        <span className="text-cyan-400">
                            before production does.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-xl mx-auto text-slate-400 text-lg leading-8">
                        Analyze your codebase, discover hidden risks, and get
                        intelligent recommendations with CodeSentinel AI.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="px-7 py-3.5 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition flex items-center justify-center gap-2">
                            Analyze Your Code
                            <FiArrowRight />
                        </button>

                        <button className="px-7 py-3.5 rounded-full border border-slate-700 text-white hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                            <FiGithub />
                            View on GitHub
                        </button>

                    </div>

                </div>
            </section>


            {/* =====================================================
                10. FOOTER
            ===================================================== */}
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
                                AI-powered code auditing that helps developers
                                find vulnerabilities, detect bugs, and ship
                                safer software.
                            </p>

                        </div>


                        {/* Product */}
                        <div>

                            <h4 className="text-sm font-semibold text-white">
                                Product
                            </h4>

                            <div className="mt-5 space-y-3 text-sm text-slate-500">

                                <a href="#features" className="block hover:text-cyan-400 transition">
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
        </>
    );
}


/* =====================================================
   COMPONENTS
===================================================== */

function Agent({ icon, title, description }) {
    return (
        <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50 hover:border-cyan-500/50 transition">

            <div className="text-cyan-400 text-xl">
                {icon}
            </div>

            <h3 className="mt-5 font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-sm text-slate-500 leading-6">
                {description}
            </p>

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
                        .replace("text", "bg")}`}
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

            <span
                className={`shrink-0 px-2.5 py-1 rounded-full text-xs ${colors[color]}`}
            >
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

export default ProductSections;