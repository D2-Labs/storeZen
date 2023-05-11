import React from "react";
import { useState } from "react";
import SalesLayout from "@/Layouts/SalesLayout";
import DateTimeSearch from "@/Components/DateTimeSearch";

import SalesMadeCard from "@/Components/SalesMadeCard";
import Pagination from "@/Components/Pagination";


let dummy_sales_made = [];
for (let i = 0; i < 10; i++) {
    dummy_sales_made.push(`item_${i}`);
}

const SalesMade = () => {
    return (
        <SalesLayout>
            <div className="search-box sm:flex items-center p-5">
                <input type="checkbox" name="date_search" className="mx-2" />
                <DateTimeSearch />
            </div>

            <div
                className="salesmade custom-grid-box p-2"
                style={{ "--size": "300px" }}
            >
                {dummy_sales_made.map((card, index) => (
                    <SalesMadeCard key={index} />
                ))}
            </div>

            <Pagination/>
        </SalesLayout>
    );
};

export default SalesMade;
