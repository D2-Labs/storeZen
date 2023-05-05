import { useState, useCallback, useEffect } from "react";
import BarChart from "@/Components/BarChart";
import StatsPriceCard from "@/Components/StatsPriceCard";

import SalesLayout from "@/Layouts/SalesLayout";
import ProductsListingTable from "@/Components/ProductsListingTable";
import DonutChart from "@/Components/DonutChart";
import CustomerActivityGraph from "@/Components/CustomerActivityGraph";
import ProductDetailModal from "@/Components/ProductDetailModal";

const cards = [
    {
        digits: "10043984",
        type: "sales",
        title: "Total Sales",
    },
    {
        digits: "10043984",
        type: "profits",
        title: "Total Profits",
    },
    {
        digits: "10043984",
        type: "orders",
        title: "Total Order",
    },
];
const bar = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Profits",
            data: [10, 2, 11, 5, 7, 4, 8],
            borderRadius: 2,
            backgroundColor: "rgba(21, 215, 108, 0.6)",
        },
        {
            label: "Sales",
            data: [9, 12, 5, 5, 14, 11, 10],
            borderRadius: 2,
            backgroundColor: "rgba(83, 111, 235, 0.6)",
        },
    ],
};

const customerActivity = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Customer Activity",
            data: [10, 2, 11, 5, 7, 4, 8],
            borderRadius: 2,
            barRadius: 10,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
    ],
};

const doughnut = {
    labels: ["profit", "Sales"],
    datasets: [
        {
            label: "Sales and Profits Made",
            data: [1000, 564],
        },
    ],
};

const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
        },
    ],
};

function Statistics() {
    const [products, setProductsData] = useState(null);
    const [barData, setBarData] = useState(bar);
    const [doughnutData, setDoughnutData] = useState(doughnut);
    const [customerActivityData, setCustomerActivityData] =
        useState(customerActivity);
    const [ordersGraphData, setOrdersGraphData] = useState(lineData);
    const [modalState, setModalState] = useState(false);
    const [modalProduct, setModalProduct] = useState({});

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductsData(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const showModal = (product) => {
        setModalState(true);
        setModalProduct(product);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <SalesLayout>
            <ProductDetailModal
                product={modalProduct}
                closeCallback={() => setModalState(false)}
                state={modalState}
            />
            <div className="flex flex-col justify-start items-start w-full px-5 py-5 ">
                <h1 className="text-[1.5rem] font-bold">Overview</h1>

                {/* section one */}
                <section className="flex flex-col w-full lg:grid lg:grid-cols-[5fr_2fr] lg:gap-x-2 lg:h-[45rem] ">
                    <div className="w-full flex flex-col h-full overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center justify-center w-full text-gray-600  border-slate-200 shadow-sm shadow-slate-400 rounded-md bg-white px-5 py-5">
                            {cards.map((card) => (
                                <StatsPriceCard {...card} />
                            ))}
                        </div>

                        <BarChart barData={barData} />
                    </div>
                    <DonutChart
                        doughnutData={doughnutData}
                        lineData={ordersGraphData}
                    />
                </section>
                {/* second section */}
                <section className="flex flex-col w-full lg:grid lg:grid-cols-[5fr_2fr] lg:gap-x-2 lg:h-[30rem]">
                    {/* flex flex-col md:flex-row items-center justify-center w-full
                    text-gray-600 border-slate-200 shadow-sm shadow-slate-400
                    rounded-md bg-white px-5 py-5 */}
                    <div className="mb-5 md:mb-0 w-full flex flex-col items-start justify-center border  border-slate-200 shadow-sm shadow-slate-400 rounded-md bg-white px-5 pb-5 h-max  max-h-[30rem] overflow-hidden">
                        <h1 className="text-[1.5rem] font-bold my-5  px-3 py-2">
                            Top Selling Products
                        </h1>
                        <div className="overflow-auto scrollbar-thin h-full scrollbar-track-transparent scrollbar-thumb-slate-200 w-full ">
                            <ProductsListingTable
                                products={products}
                                hasCheckedBox={false}
                                showModal={showModal}
                            />
                        </div>
                    </div>
                    {/* <DemoGraph /> */}
                    <CustomerActivityGraph barData={customerActivityData} />
                </section>
            </div>
        </SalesLayout>
    );
}

export default Statistics;
