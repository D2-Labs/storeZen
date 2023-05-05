import { TfiAngleDown } from "react-icons/all";

function ProductListingItem({
    product,
    hasCheckedBox = true,
    hasStatus = true,
    handleClick = () => {},
}) {
    return (
        <>
            <tr
                className="hidden lg:table-row border-b border-gray-300 lg:h-[3.5rem]"
                key={product?.id}
                onClick={(e) => {
                    if (
                        !e.target.classList.contains("checkbox") &&
                        !e.target.classList.contains("checkbox-container")
                    ) {
                        handleClick();
                    }
                }}
            >
                {hasCheckedBox && (
                    <td className="checkbox-container">
                        <input type="checkbox" name="" className="checkbox" />
                    </td>
                )}
                <td className="">
                    <img
                        src={product?.image}
                        alt=""
                        className="w-[2rem] h-[2rem] mr-2 px-1 py-1 bg-gray-200 rounded-sm inline-block"
                    />
                    omaya m404
                </td>
                <td>{product?.category}</td>
                <td>red , blue</td>
                <td className="">100</td>
                <td className="">{product?.price}</td>
                {hasStatus && (
                    <td className="text-center">
                        <span className="bg-green-500 text-white inline-block px-3 py-1 rounded-[4rem]">
                            Active
                        </span>
                    </td>
                )}
            </tr>

            <tr
                className="table-row lg:hidden"
                onClick={(e) => {
                    console.log(e.target);
                    console.log(e.relatedTarget);
                    console.log(e.currentTarget);
                    if (
                        e.target.classList.contains("title") ||
                        e.target.classList.contains("image")
                    ) {
                        handleClick();
                    }
                }}
            >
                <td className="table-cell">
                    <div className="relative flex flex-col w-full ">
                        <input
                            type="checkbox"
                            className="peer absolute w-8 right-2 opacity-0 z-10 h-12"
                        />
                        <div className="text-bold uppercase text-sm h-12 flex items-center px-3 bg-light-blue  rounded-t-md  rounded-b-md peer-checked:rounded-b-none ">
                            {hasCheckedBox && (
                                <input type="checkbox" name="" id="" />
                            )}
                            <img
                                src={product?.image}
                                alt=""
                                className="image w-8 h-8 mx-[.5rem]"
                            />
                            <span className="flex items-center flex-1 ml-2 title  text-[.5rem] mr-5  h-8 center overflow-hidden">
                                {product?.title}
                            </span>
                        </div>

                        <div className=" transition-transform duration-150 peer-checked:rotate-180 z-5 absolute right-1 top-4 ">
                            <TfiAngleDown className="w-[2rem]" />
                        </div>

                        <div className="flex flex-col transition-all duration-300 ease-in-out max-h-0 overflow-hidden peer-checked:max-h-[70rem] bg-slate-50 bg-opacity-30 rounded-b-md">
                            <table>
                                <tr className="border-b border-slate-100 h-[2.5rem]">
                                    <td className="pl-3">Category :</td>
                                    <td>Omaya</td>
                                </tr>
                                <tr className="border-b border-slate-100 h-[2.5rem]">
                                    <td className="pl-3">Price</td>
                                    <td>6000</td>
                                </tr>
                                <tr className="border-b border-slate-100 h-[2.5rem]">
                                    <td className="pl-3">Quantity</td>
                                    <td>200</td>
                                </tr>
                                <tr className=" h-[2.5rem] ">
                                    <td className="pl-3">Variants</td>
                                    <td> red, blue, green</td>
                                </tr>
                                <tr>
                                    <td className="pl-3">Status:</td>
                                    <td>
                                        <span className="bg-green-500 text-white inline-block px-3 py-[1px] rounded-xl">
                                            status
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default ProductListingItem;
