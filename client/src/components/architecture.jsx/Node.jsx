import React from "react";

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

export default Node;