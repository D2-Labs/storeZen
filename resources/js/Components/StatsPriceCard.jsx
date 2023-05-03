import React from "react";
import {
    AiOutlineTag,
    TbArrowCurveRight,
    BsCurrencyDollar,
    BsBarChartLine,
    GrStackOverflow,
} from "react-icons/all";

const icons = {
    profits: <AiOutlineTag className="text-[1.5rem]" />,
    sales: <BsBarChartLine className="text-[1.5rem]" />,
    orders: <GrStackOverflow className="text-[1.5rem]" />,
};

function StatsPriceCard({ digits, title, type = "sales" }) {
    const icon = icons[type];
    const backgroundColor =
        type == "sales"
            ? "bg-blue-300"
            : type == "profits"
            ? "bg-green-300"
            : "bg-purple-300";

    return (
        <div
            className={
                "grid grid-rows-1 w-4/12 px-5 py-3 rounded-md mr-2 " +
                backgroundColor
            }
        >
            <div className="flex items-center justify-start w-full mb-2">
                <span className="inline-block px-2 py-2 rounded-md bg-white">
                    {icon}
                </span>
                <span className="flex-1 ml-2">{title}</span>
            </div>
            <div className="flex items-center justify-start w-full ">
                <span className="flex-1 ml-2 flex items-center text-[1.5rem]">
                    {type != "orders" && <BsCurrencyDollar />}
                    <span className="">{digits}</span>
                </span>
                <span className="inline-block px-2 py-2 rounded-md">
                    <TbArrowCurveRight className="text-[1.5rem]" />
                </span>
            </div>
        </div>
    );
}

export default StatsPriceCard;
