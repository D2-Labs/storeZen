import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chatjs } from "chart.js/auto";

function BarChart({ barData }) {
    return (
        <div className="lg:flex-1 px-5 py-5 bg-white w-full my-5 rounded-md border-slate-200 shadow-sm shadow-slate-400  ">
            <h1 className="text-[1.5rem] font-bold my-5  px-3 py-2">
                Top Selling Products
            </h1>
            <Bar
                data={barData}
                options={{
                    animation: true,
                    responsive: true,
                }}
            />
        </div>
    );
}

export default BarChart;
