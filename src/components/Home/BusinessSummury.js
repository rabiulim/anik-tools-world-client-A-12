import React from "react";

const BusinessSummary = () => {
    return (
        <div className="m-6">
            <div className="mt-10">
                <h2 className="uppercase text-center text-4xl font-bold text-primary mt-5">
                    Millions Users trust us
                </h2>
                <p className="uppercase text-center font-semibold text-xl text-slate-500">
                    try to understand user expedition
                </p>
            </div>
            <div className="stats w-full text-center stats-vertical lg:stats-horizontal shadow mt-6  bg-base-200 h-52 text-accent font-bold">
                <div className="stat">
                    <div className="stat-title ">Customers</div>
                    <div className="stat-value text-primary">10k+</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-primary">120M+</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value text-primary">33k+</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Tools</div>
                    <div className="stat-value text-primary">300+</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;