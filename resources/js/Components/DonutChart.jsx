import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js";

function DonutChart({ doughnutData, lineData }) {
    return (
        <div className="px-5 pb-5 bg-white w-full h-[full] mb-5 rounded-md border-slate-200 shadow-sm shadow-slate-400">
            <h1 className="text-[1.5rem] font-bold my-5  px-3 py-2">
                Sales, Profits and Orders
            </h1>
            <div className="w-full">
                <Doughnut
                    data={doughnutData}
                    options={{
                        hoverOffset: 4,
                        animationL: true,
                        aspectRatio: 1.35,
                    }}
                />
                <h2 className="w-full flex items-center justify-center py-1 text-lg font-bold">
                    Sales and Profits
                </h2>
            </div>
            <div className=" mt-2 bg-slate-300 border rounded-md px-2 py-3">
                <h1 className="text-[1.5rem] font-bold">
                    Orders made This week
                </h1>
                <Line
                    data={lineData}
                    options={{
                        animation: true,
                        aspectRatio: 1.3,
                    }}
                />
            </div>
        </div>
    );
}

export default DonutChart;
