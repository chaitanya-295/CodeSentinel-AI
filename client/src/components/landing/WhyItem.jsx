import React from "react";

function WhyItem({ number, title, description }) {
    return (
        <div className="py-5 border-b border-gray-200 flex gap-6">

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

export default WhyItem;