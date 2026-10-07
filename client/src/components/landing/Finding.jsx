import React from "react";

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

export default Finding;