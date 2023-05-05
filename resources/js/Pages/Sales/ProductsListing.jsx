import { useCallback, useEffect, useState } from "react";
import SearchInput from "@/Components/SearchInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Clickable from "@/Components/Clickable";
import ProductsListingTable from "@/Components/ProductsListingTable";
import ProductDetailModal from "@/Components/ProductDetailModal";

import ModalBox from '@/Components/ModalBox'
import IconButton from '@/Components/IconButton'
import ItemBoughtCard from '@/Components/ItemBoughtCard'

import navlinks from '@/CentralInfo/salesNavLinks.js';

let dummy_sales_made = [];
for(let i=0; i < 10; i++) {
    dummy_sales_made.push(`item_${i}`);
}

function ProductListings() {
    const [products, setProductsData] = useState(null);
    const [product, setProduct] = useState({});
    const [modalState, setModalState] = useState(false);

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
        <DashboardLayout nav_icons={navlinks} >

            <ProductDetailModal
                closeCallback={() => setModalState(false)}
                product={product}
                state={modalState}
            />

            <div className="w-full h-max  flex flex-col overflow-auto px-5 pb-5">
                <h2 className="text-[1.5rem] font-bold capitalize mx-5 my-5">
                    Products
                </h2>
                <section className="flex flex-col items-start justify-start bg-white w-full min-h-screen py-4 md:px-3">
                    {/* section header */}
                    <div className="w-full py-2 px-3 flex flex-col md:flex-row items-center justify-between">
                        {/* section search bar */}
                        <SearchInput />
                        <Clickable className="bg-blue-600 px-3 py-2 text-white self-end mt-3 md:mt-0" handleClick={() => setModalState(true)}>
                            Submit
                        </Clickable>
                    </div>
                    <div className="w-full md:px-3 py-2 flex flex-col items-center justify-start md:mt-3 ">
                        <ProductsListingTable
                            products={products}
                            showModal={(product) => {
                                setProduct(product);
                                setModalState(true);
                            }}
                        />
                    </div>
                </section>
            </div>

            <ModalBox state={modalState} closeCallback={() => setModalState(false)} classname='p-4 bg-light-blue w-[90vw] sm:w-[500px] h-[490px]'>

                <div className="h-[400px] overflow-y-scroll w-full">
                    {dummy_sales_made.map(item => <ItemBoughtCard />)}
                </div>

                <Clickable className='p-2 bg-blue w-full text-white rounded my-4'>Done</Clickable>
                
            </ModalBox>
        </DashboardLayout>
    );
}

export default ProductListings;
