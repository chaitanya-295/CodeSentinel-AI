import React from "react";

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

export default ResultStat;