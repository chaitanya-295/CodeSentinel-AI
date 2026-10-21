import React, { useState } from "react";
import Hero from "../components/landing/Hero";
import WhatWeDo from "../components/landing/WhatWeDo";
import MultiAgentArchitecture from "../components/landing/MultiAgentArchitecture";
import CodeAnalysis from "../components/landing/CodeAnalysis";
import BeforeAfter from "../components/landing/BeforeAfter";
import WhyCodeSentinel from "../components/landing/WhyCodeSentinel";
import Cta from "../components/landing/Cta";

function Home() {

    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* What We Do */}
            <WhatWeDo />

            {/* Multi-Agent Architecture */}
            <MultiAgentArchitecture />

            {/* Security / Code Analysis Results */}
            <CodeAnalysis />

            {/* Before & After */}
            <BeforeAfter />

            {/* Why CodeSentinel */}
            <WhyCodeSentinel />

            {/* CTA */}
            <Cta />
        </div>
    );
}

export default Home;