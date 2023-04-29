import React from "react";
import DashboardLayout from "../../Layouts/DashboardLayout";
import DateTimeSearch from "../../Components/DateTimeSearch";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/all";
import Clickable from "@/Components/Clickable";

const SalesMade = () => {
    return (
        <DashboardLayout>
            <div className="search-box sm:flex items-center p-5">
                <input type="checkbox" name="date_search" className="mx-2" />
                <DateTimeSearch />
            </div>
            <div
                className="salesmade custom-grid-box p-2"
                style={{ "--size": "300px" }}
            >
                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded" >
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>

                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>

                <div className="sales_card p-2 bg-white shadow rounded">
                    <div className="date text-sm bg-gray-100 rounded p-1">
                        12th May 2023, 2:25pm
                    </div>

                    <div className="name-quantity-box flex flex-col justify-center p-2">
                        <span className="quantity font-bold text-2xl ">
                            {" "}
                            Ghc 2670
                        </span>
                        <span className="text-xs">Multiple items bought</span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="quantity p-1 font-bold rounded blue">
                            650 items
                        </span>
                        <Clickable className="bg-blue px-4 py-[2.5px] text-white font-medium rounded">
                            Edit
                        </Clickable>
                    </div>
                </div>
            </div>

            <div className="pagination-box flex justify-center mt-12">
                <Clickable className="pagination-left rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                    <IoChevronBackOutline />
                </Clickable>

                <Clickable className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                    1
                </Clickable>

                <Clickable className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                    2
                </Clickable>

                <Clickable className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                    3
                </Clickable>

                <Clickable className="pagination-right rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
                    <IoChevronForwardOutline />
                </Clickable>
            </div>
        </DashboardLayout>
    );
};

export default SalesMade;
