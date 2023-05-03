import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js";

function DonutChart({ doughnutData, lineData }) {
    return (
        <div className="px-5 pb-5 bg-white w-full h-[full] mb-5 rounded-md border-slate-200 shadow-sm shadow-slate-400">
            <h1 className="text-[1.5rem] bold my-5  px-3 py-2">
                Top Selling Products
            </h1>

            <Doughnut
                data={doughnutData}
                options={{
                    hoverOffset: 4,
                    animationL: true,
                }}
            />

            <div className="PY-5 mt-5 bg-slate-300 border rounded-md px-2 py3">
                <h1 className="text-lg font-bold">Orders made This week</h1>
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
