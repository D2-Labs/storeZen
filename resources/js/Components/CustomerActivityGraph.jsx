import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js";

function CustomerActivityGraph({ barData }) {
    return (
        <div className="px-5 pb-5 bg-white w-full h-full mb-5 rounded-md border-slate-200 shadow-sm shadow-slate-400 flex flex-col items-center justify-end">
            <h1 className="text-[1.5rem] bold my-5  px-3 py-2">
                Top Selling Products
            </h1>
            <Bar
                data={barData}
                options={{
                    animation: true,
                    aspectRatio: 0.9,
                    color: "white",
                    borderColor: "white",
                    backgroundColor: "white",
                }}
            />
        </div>
    );
}

export default CustomerActivityGraph;
