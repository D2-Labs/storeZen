import { useCallback, useState } from "react";
import SalesLayout from "@/Layouts/SalesLayout";
import SubmitModal from "@/Components/SubmitModal";
import Products from "@/Components/Products";

let dummy_sales_made = [];
for (let i = 0; i < 10; i++) {
    dummy_sales_made.push(`item_${i}`);
}

function ProductListings() {
    const [products, setProductsData] = useState(null);
    const [submitModalState, setSubmitModalState] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProductsData(data);
        } catch (error) {
            console.log(error);
        }
    }, []);

    fetchData();

    return (
        <SalesLayout>
            <Products
                products={products}
                submitCallBack={() => setSubmitModalState(true)}
            />
            <SubmitModal
                data={dummy_sales_made}
                handleSubmitState={() => setSubmitModalState(false)}
                submitModalState={submitModalState}
            />
        </SalesLayout>
    );
}

export default ProductListings;
