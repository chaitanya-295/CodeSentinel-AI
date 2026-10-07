import React from "react";

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

export default AgentNode;