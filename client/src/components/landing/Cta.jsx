import React from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";

function Cta() {
    return (
        <section className="bg-slate-50 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 py-8 sm:py-12 md:py-16">
            <div className="bg-[#020617] flex items-center justify-center rounded-[24px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl border border-slate-200 hover:-translate-y-1 duration-300">
                <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 text-center">

                    {/* Small Heading */}
                    <p className="text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-cyan-400">
                        Start Building Securely
                    </p>

                    <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
                        Let AI review your code
                        <br />
                        <span className="text-cyan-400">
                            before production does.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-4 max-w-xl mx-auto text-slate-400 text-sm sm:text-base leading-6 px-1 sm:px-0">
                        Analyze your codebase, discover hidden risks, and get intelligent recommendations with CodeSentinel AI.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">

                        <button className="w-full sm:w-auto px-6 sm:px-7 py-2.5 rounded-full bg-cyan-400 text-slate-950 font-semibold text-sm sm:text-base hover:bg-cyan-300 transition flex items-center justify-center gap-2">
                            Analyze Your Code
                            <FiArrowRight />
                        </button>

                        <button className="w-full sm:w-auto px-6 sm:px-7 py-2.5 rounded-full border border-slate-700 text-white text-sm sm:text-base hover:border-cyan-400 hover:text-cyan-400 transition flex items-center justify-center gap-2">
                            <FiGithub />
                            View on GitHub
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Cta;