import ProductsListingTable from "@/Components/ProductsListingTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useCallback, useState, useEffect } from "react";

function SalesDetail() {
    const [productsData, setProductsData] = useState([]);
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
            <div className="mx-5 my-5 flex flex-col">
                <div className="flex py-5">
                    <h1>Sales Id 00012231776</h1>
                    <span>date</span>
                </div>
                <div className="w-full py-2 px-3 flex flex-col md:flex-row items-center justify-between">
                    {/* section search bar */}
                    <SearchInput />
                    <Clickable
                        className="bg-blue-600 px-3 py-2 text-white self-end mt-3 md:mt-0"
                        handleClick={() => setSubmitModalState(true)}
                    >
                        Submit
                    </Clickable>
                </div>
                <div className="w-full md:px-3 py-2 flex flex-col items-center justify-start md:mt-3 ">
                    <ProductsListingTable products={productsData} />
                </div>
            </div>
        </DashboardLayout>
    );
}

export default SalesDetail;
