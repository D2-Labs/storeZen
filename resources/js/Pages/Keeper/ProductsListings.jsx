import Products from "@/Components/Products";
import KeeperLayout from "@/Layouts/KeeperLayout";
import { useState, useCallback } from "react";

function ProductsListings() {
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
        <KeeperLayout>
            <Products
                products={products}
                hasSubmit={false}
                hasCheckedBox={false}
            />
        </KeeperLayout>
    );
}

export default ProductsListings;
