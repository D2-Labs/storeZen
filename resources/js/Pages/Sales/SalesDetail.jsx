import ProductsListingTable from "@/Components/ProductsListingTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useCallback, useState, useEffect } from "react";
import SearchInput from "@/Components/SearchInput";
import Clickable from "@/Components/Clickable";
import SubmitModal from "@/Components/SubmitModal";
import SalesLayout from "@/Layouts/SalesLayout";

function SalesDetail() {
    let dummy_sales_made = [];
    for (let i = 0; i < 10; i++) {
        dummy_sales_made.push(`item_${i}`);
    }
    const [submitState, setSubmitState] = useState(false);
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
        <SalesLayout>
            <div className="mx-5 my-5 flex flex-col">
                <div className="flex py-5">
                    <h1 className="text-[1.5rem] font-bold flex items-center w-full">
                        Sales Id{" "}
                        <span className="ml-2 px-3 py-2 bg-slate-200 rounded-lg">
                            00012231776
                        </span>
                    </h1>
                    <span>date</span>
                </div>
                <div className="bg-white py-10 px-5">
                    <div className="w-full py-2 px-3 flex flex-col md:flex-row items-center justify-between">
                        {/* section search bar */}
                        <SearchInput />
                        <Clickable
                            className="bg-blue-600 px-3 py-2 text-white self-end mt-3 md:mt-0"
                            handleClick={() => setSubmitState(true)}
                        >
                            Update
                        </Clickable>
                    </div>
                    <div className="w-full md:px-3 py-2 flex flex-col items-center justify-start md:mt-3">
                        <ProductsListingTable products={productsData} />
                    </div>
                </div>
            </div>
            <SubmitModal
                data={dummy_sales_made}
                handleSubmitState={() => setSubmitState(false)}
                submitModalState={submitState}
            />
        </SalesLayout>
    );
}

export default SalesDetail;
