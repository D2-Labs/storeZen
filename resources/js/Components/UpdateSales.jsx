import React from "react";
import { BiDollar, BiPlus } from "react-icons/all";

function UpdateSales({ toggleForm }) {
    return (
        <div className="w-full px-3 flex flex-col md:flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between mt-2 mb-5">
                <h1 className="text-[1.2rem] font-bold ">
                    Sales ID:
                    <span className="bg-slate-300 px-3 py-2 text-[1.5rem] rounded-md ml-3">
                        0011939298#
                    </span>
                </h1>
                <span className="text-blue-500 self-end mt-3 md:mt-0">
                    data purchased
                </span>
            </div>
            <form className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row items-start w-full justify-between mb-3 ">
                    <div className="flex w-full mb-3 items-center flex-1 justify-between md:pr-2">
                        <span className="md:w-[5.5rem] inline-block font-bold whitespace-nowrap mr-2">
                            Initial quantity
                        </span>

                        <span className="text-[1rem] px-3 py-2 bg-blue-500 rounded-md ml-2 text-white w-[6.5rem] text-right">
                            10000000
                        </span>
                    </div>

                    <label
                        htmlFor="new quantity"
                        className="flex whitespace-nowrap items-center justify-between w-full  md:w-[12rem]"
                    >
                        <span className="mr-2">new Quantity</span>
                        <input
                            type="number"
                            name=""
                            className="md:w-[5rem] w-[6.5rem] self-end"
                        />
                    </label>
                </div>
                <div className="flex flex-col md:flex-row items-start w-full justify-between mb-3 ">
                    <div className="flex w-full mb-3 items-center flex-1 justify-between md:pr-2">
                        <span className="md:w-[5.5rem] inline-block font-bold whitespace-nowrap mr-2">
                            Initial Price
                        </span>

                        <span className="text-[1rem] px-3 py-2 bg-blue-500 rounded-md ml-2 text-white w-[6.5rem] text-right inline-block">
                            10000
                        </span>
                    </div>

                    <label
                        htmlFor="new quantity"
                        className="flex whitespace-nowrap items-center justify-between w-full  md:w-[12rem] "
                    >
                        <span className="mr-2"> new Price</span>
                        <input
                            type="number"
                            name=""
                            className="md:w-[5rem] w-[6.5rem]  self-end"
                        />
                    </label>
                </div>

                <div className="flex items-center justify-between mt-5 md:mt-0">
                    <span className="flex-1 mr-5 border border-slate-300 px-2 py-3 rounded-md">
                        Balance
                    </span>
                    <span className="bg-slate-300 px-3 py-2 text-[1.5rem] rounded-md ml-3 w-5/12 flex items-center justify-between">
                        <BiPlus className="text-[1.5rem] font-bold" />
                        <span className="flex items-center font-extrabold">
                            <BiDollar /> 8398
                        </span>
                    </span>
                </div>
                <div className="flex justify-end mt-10">
                    <button
                        className="px-3 py-2 bg-red-500 mr-3 rounded-md text-white"
                        onClick={toggleForm}
                    >
                        Replace
                    </button>
                    <button className="px-3 py-2 bg-white  rounded-md border border-slate-300 ">
                        save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateSales;
