import { useCallback, useEffect, useState } from "react";
import SearchInput from "@/Components/SearchInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Clickable from "@/Components/Clickable";
import ProductsListingTable from "@/Components/ProductsListingTable";

function ProductListings() {
    const [products, setProductsData] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductsData(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <DashboardLayout>
            <div className="w-full h-max  flex flex-col overflow-auto px-5 pb-5">
                <h2 className="text-[1.5rem] font-bold capitalize mx-5 my-5">
                    Products
                </h2>
                <section className="flex flex-col items-start justify-start bg-white w-full min-h-screen py-4 md:px-3">
                    {/* section header */}
                    <div className="w-full py-2 px-3 flex flex-col md:flex-row items-center justify-between">
                        {/* section search bar */}
                        <SearchInput />
                        <Clickable className="bg-blue-600 px-3 py-2 text-white self-end mt-3 md:mt-0">
                            Submit
                        </Clickable>
                    </div>
                    <div className="w-full md:px-3 py-2 flex flex-col items-center justify-start md:mt-3 ">
                        <ProductsListingTable products={products} />
                    </div>
                </section>
            </div>
        </DashboardLayout>
    );
}

export default ProductListings;
