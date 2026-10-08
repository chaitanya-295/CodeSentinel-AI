import React from "react";
import WhyItem from "./WhyItem";

function WhyCodeSentinel() {
    return (
        <section className="bg-white py-14 sm:py-22">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Heading */}
                    <div className="lg:py-17">

                        <p className="text-sm uppercase tracking-[0.2em] text-cyan-600 font-semibold">
                            Why CodeSentinel
                        </p>

                        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold trackiung-tight text-black">
                            More than a
                            <br />
                            <span className="text-cyan-500">
                                code scanner.
                            </span>
                        </h2>

                        <p className="mt-4 text-gray-500 text-lg leading-8 max-w-md">
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
    );
}

export default WhyCodeSentinel;