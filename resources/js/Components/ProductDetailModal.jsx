import ModalBox from "@/Components/ModalBox";
import { BiDollar, AiOutlineLine } from "react-icons/all";

function ProductDetailModal({ product, state, closeCallback }) {
    return (
        <ModalBox
            state={state}
            closeCallback={() => closeCallback(false)}
            classname={
                "h-[30rem] md:h-[35rem] lg:h-max mx-3 md:w-9/12 lg:mx-10"
            }
        >
            <div className="overflow-auto scrollbar-thin h-full   scrollbar-track-transparent scrollbar-thumb-slate-200">
                <div className="flex flex-col lg:grid lg:grid-cols-2 w-full px-10 py-5 ">
                    <div className="relative w-full overflow-hidden flex items-center justify-center border border-slate-300 py-1">
                        <img src={product?.image} alt="" className="w-7/12" />
                    </div>
                    <div className="w-full flex flex-col ml-3">
                        <div className="flex items-center mr-5 mb-4">
                            <h1 className="flex-1 text-[1.5rem] font-bold">
                                {product?.title}
                            </h1>
                            <span className="ml-2 inline-block px-3 py-1 bg-green-300 rounded-xl">
                                active
                            </span>
                        </div>
                        <hr />
                        <div className="my-3">
                            <div>
                                <span className="font-bold text-[1rem] capitalize px-3 py-1 bg-red-400 text-white rounded mr-2">
                                    category
                                </span>
                                <span className="uppercase font-bold">
                                    {product?.category}
                                </span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="mx-2 text-[1rem]">
                                    Rating
                                    <span className="font-bold text-[1rem] capitalize px-3 py-1 bg-gray-400 text-white rounded ml-2">
                                        {product?.rating?.rate}
                                    </span>
                                </span>
                                <AiOutlineLine />
                                <span className="mx-2">
                                    Count
                                    <span className="font-bold text-[1rem] capitalize px-3 py-1 bg-gray-400 text-white rounded mx-2">
                                        {product?.rating?.count}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div className="flex items-center my-2 text-[2.5rem] font-bold">
                            <span className="text-white text-[1rem] px-3 py-1 bg-blue-400 rounded-md ">
                                Min Price
                            </span>
                            <span>
                                <BiDollar />
                            </span>
                            {product?.price}
                        </div>
                        <div>
                            <span className="font-bold text-[1rem] block">
                                Description
                            </span>
                            <p className="py-2 px-2 rounded bg-slate-100">
                                {product?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ModalBox>
    );
}

export default ProductDetailModal;
