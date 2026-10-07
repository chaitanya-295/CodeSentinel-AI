import React from "react";
import { FiArrowRight, FiGithub } from "react-icons/fi";

function Cta() {
    return (
        <section className="bg-slate-50 py-8 sm:py-16 px-40">
            <div className="bg-[#020617] items-center justify-center rounded-[40px] shadow-2xl border border-slate-200 hover:-translate-y-1 duration-300">
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
    );
}

export default Cta;