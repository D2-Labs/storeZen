import React from "react";
import SearchInput from "./SearchInput";
import Clickable from "./Clickable";
import ProductsListingTable from "./ProductsListingTable";

function Products({
    products,
    editable = false,
    hasCheckedBox = true,
    hasStatus = true,
    hasSubmit = true,
    submitCallBack,
}) {
    return (
        <div className="w-full h-max  flex flex-col overflow-auto px-5 pb-5">
            <h2 className="text-[1.5rem] font-bold capitalize mx-5 my-5">
                Products
            </h2>
            <section className="flex flex-col items-start justify-start bg-white w-full h-max py-4 md:px-3">
                {/* section header */}
                <div className="w-full py-2 px-3 flex flex-col md:flex-row items-center justify-between">
                    {/* section search bar */}
                    <SearchInput />
                    {hasSubmit && (
                        <Clickable
                            className="bg-blue-600 px-3 py-2 text-white self-end mt-3 md:mt-0"
                            handleClick={submitCallBack}
                        >
                            Submit
                        </Clickable>
                    )}
                </div>
                <div className="w-full md:px-3 py-2 flex flex-col items-center justify-start md:mt-3 ">
                    <ProductsListingTable
                        products={products}
                        editable={editable}
                        hasCheckedBox={hasCheckedBox}
                        hasStatus={hasStatus}
                    />
                </div>
            </section>
        </div>
    );
}

export default Products;
