import { useCallback, useEffect, useState } from "react";
import { BiDollar, BiPlus } from "react-icons/all";

function ReplaceSalesForm({
    product,
    filters = ["Omaya", "Concord", "Shaolong", "Travel man"],
    toggleForm,
}) {
    const [replacementItem, setReplacementItem] = useState("");
    const [filterItem, setFilterItem] = useState("Filter");

    const handleFilter = useCallback(() => {
        const filterEl = document.getElementById("filter");
        const replacementChecked = document.querySelector(
            ".replacementChecked"
        );

        filterEl.addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-item")) {
                setFilterItem(e.target.textContent);
                replacementChecked.checked = false;
            }
        });
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log("submitted form data", data);
    };
    useEffect(() => {
        handleFilter();
    }, [handleFilter]);

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

            <form
                action=""
                className="w-full flex-col"
                onSubmit={handleFormSubmit}
            >
                <div>
                    <h1 className="flex items-center">
                        <span className="mr-2 px-3 py-2 rounded-md bg-slate-500 text-white">
                            Product:
                        </span>
                        <span className="text-[.9rem] font-bold">
                            {product?.title}
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between mt-2">
                    <span className=" mb-2 md:mb-0 mr-2 px-3 py-2 rounded-md bg-slate-500 text-white w-full">
                        Replace With:
                    </span>
                    <div className="flex items-center justify-center bg-gray-200 px-1 h-[2.5rem] flex-1">
                        <select
                            value={replacementItem}
                            id=""
                            className="min-w-[10rem] px-2 py-1 ring-0 focus:ring-0 border-none outline-none bg-transparent flex-1"
                            name="replacementProduct"
                            onChange={(e) => setReplacementItem(e.target.value)}
                        >
                            <option>One</option>
                            <option>One</option>
                            <option>One</option>
                        </select>

                        <div className="px-2 border-l-gray-400 border-l-[1px] h-full flex items-center justify-center relative">
                            <div>{filterItem}</div>
                            <input
                                type="checkbox"
                                id=""
                                className="replacementChecked dropChecked w-full h-full peer absolute top-0 left-0 opacity-0"
                            />
                            <ul
                                className=" absolute top-[110%] right-0 invisible peer-checked:visible bg-gray-300  w-max max-h-0 peer-checked:max-h-[10rem] transition-all duration-200 overflow-hidden select-none cursor-pointer"
                                id="filter"
                            >
                                {filters.map((filter, i) => (
                                    <li
                                        className="filter-item px-3 py-2 hover:bg-gray-400"
                                        key={i}
                                    >
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end point */}
                <div className="w-full  flex flex-col md:flex-col mt-5">
                    <div className="flex items-center justify-between">
                        <span>Replacement Quantity</span>
                        <input
                            type="text"
                            name="replacementQuantity"
                            id=""
                            className="text-right w-[6.5rem] mb:w-full"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <span>Replacement Price</span>
                        <input
                            type="text"
                            name="replacementPrice"
                            id=""
                            className="text-right w-[6.5rem] mb:w-full"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-3 w-full">
                        <span className="whitespace-nowrap flex-1">
                            Total Price
                        </span>
                        <input
                            type="text"
                            value={"333333"}
                            name="totalReplacementPrice"
                            className="text-right w-[6.5rem] mb:w-full"
                            disabled
                        />
                    </div>

                    <div className="flex  flex-col md:flex-row items-center justify-between mt-3 md:mt-0">
                        <span className="w-full flex-1 md:mr-5 border border-slate-300 px-2 py-3 rounded-md flex justify-between items-center mb-2 mb:mb-0">
                            <span>Old Price :</span>
                            <span className="text-right">{product?.price}</span>
                        </span>
                        <p className="w-full bg-slate-300 px-3 py-2 text-[1.5rem] rounded-md md:ml-3 md:w-5/12 flex-col items-center justify-between">
                            <span className="text-[.9rem]">
                                Current Balance
                            </span>
                            <span className="flex items-center justify-between">
                                <BiPlus className="text-[1.5rem] font-bold" />
                                <span className="flex items-center font-extrabold">
                                    <BiDollar /> 8398
                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-end mt-5">
                        <button
                            className="px-3 py-2 bg-red-500 mr-3 rounded-md text-white"
                            onClick={toggleForm}
                        >
                            Update
                        </button>
                        <button
                            className="px-3 py-2 bg-white  rounded-md border border-slate-300 "
                            type="submit"
                        >
                            save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReplaceSalesForm;
