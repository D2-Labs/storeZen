import ProductListingItem from "./ProductListingItem";

function ProductsListingTable({
    products,
    hasCheckedBox = true,
    hasStatus = true,
}) {
    return (
        <table className=" lg:mx-0 w-[100%] select-none cursor-pointer">
            <thead>
                <tr className="hidden lg:table-row lg:border-b lg:border-gray-300">
                    {hasCheckedBox && (
                        <th className="text-left w-[2rem]">
                            <input type="checkbox" name="" id="" />
                        </th>
                    )}
                    <th className="text-left ">Product Name</th>
                    <th className="text-left ">Category</th>
                    <th className="text-left">Variant</th>
                    <th className="text-left">Quantity</th>
                    <th className="text-left">Price</th>
                    {hasStatus && <th className="text-center">Status</th>}
                </tr>
            </thead>

            <tbody>
                {products?.map((product) => (
                    <ProductListingItem
                        product={product}
                        hasCheckedBox={hasCheckedBox}
                        hasStatus={hasStatus}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ProductsListingTable;
