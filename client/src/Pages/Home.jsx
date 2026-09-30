import React, { useState } from "react";
import Hero from "../components/Hero";
import { FiSearch, FiShield, FiZap, FiGitPullRequest, FiFileText, FiAlertCircle, } from "react-icons/fi";
import HowItWorks from "../components/HowItWorks";

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
            <section className="bg-white py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-10">

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* LEFT */}
                        <div className="lg:sticky lg:top-32 lg:self-start">

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

            <HowItWorks />
        </div>
    );
}

export default Home;