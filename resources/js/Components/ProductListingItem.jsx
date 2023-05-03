import IconButton from "./IconButton";
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
                key={product.id}
                onClick={handleClick}
            >
                {hasCheckedBox && (
                    <td className="">
                        <input type="checkbox" name="" id="" />
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
                    console.log(e.relatedTarget)
                    console.log(e.currentTarget);
                    if (e.target.classList.contains("title")) {
                        handleClick();
                    }
                }}
            >
                <td className="table-cell">
                    <div className="relative flex flex-col w-full ">
                        <input
                            type="checkbox"
                            className="peer absolute w-10 right-3 opacity-0 z-10 h-12"
                        />
                        <div className="text-bold uppercase text-sm h-12 flex items-center px-3 bg-light-blue  rounded-t-md  rounded-b-md peer-checked:rounded-b-none ">
                            <input type="checkbox" name="" id="" />
                            <span className="flex items-center flex-1 ml-4 title  h-full">title</span>
                        </div>

                        <div className=" transition-transform duration-150 peer-checked:rotate-180 z-5 absolute right-4 top-4 ">
                            <TfiAngleDown className="w-[2rem]" />
                        </div>

                        <div className="flex flex-col transition-all duration-300 ease-in-out max-h-0 overflow-hidden peer-checked:max-h-[70rem] bg-slate-50 bg-opacity-30 rounded-b-md">
                            <table>
                                <tr className="border-b border-slate-100 h-[2.5rem]">
                                    <td className="pl-3">Category :</td>
                                    <td>Omaya</td>
                                    <td>
                                        <span className="bg-green-500 text-white inline-block px-3 py-[1px] rounded-xl">
                                            status
                                        </span>
                                    </td>
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
                            </table>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
}

export default ProductListingItem;
