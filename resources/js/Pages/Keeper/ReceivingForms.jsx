import KeeperLayout from "@/Layouts/KeeperLayout";
import { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

function ReceivingForms() {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});

    const handleRemoveField = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("data-fieldId");

        setFormData((formData) => {
            delete formData[`category_${id}`];
            delete formData[`product_${id}`];
            delete formData[`quantity_${id}`];

            return formData;
        });
        setFields((state) => state.filter((value) => value.key !== id));
    };

    const field = (id) => (
        <tr key={id}>
            <td>
                <select
                    onChange={updateData}
                    name={`category_${id}`}
                    id=""
                    className="w-full"
                >
                    <option>Choose Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
                </select>
            </td>
            <td>
                <select
                    onChange={updateData}
                    name={`product_${id}`}
                    id=""
                    className="w-full"
                >
                    <option>Choose Product</option>
                    <option value="Product 1">Product 1</option>
                    <option value="Product 2">Product 2</option>
                    <option value="Product 3">Product 3</option>
                    <option value="Product 4">Product 4</option>
                </select>
            </td>
            <td>
                <input
                    type="number"
                    name={`quantity_${id}`}
                    id=""
                    onChange={updateData}
                    className="text-right w-full"
                />
            </td>
            <td className="text-left">
                <button
                    className="w-8 h-8 px-1 py-1 hover:bg-slate-100 rounded-full self-end"
                    onClick={handleRemoveField}
                    data-fieldId={id}
                >
                    <BiMinus className="text-red-400 text-[1.5rem]" />
                </button>
            </td>
        </tr>
    );

    const handleAddField = (e) => {
        e.preventDefault();
        setFields((state) => [...state, { key: uuidv4(), field }]);
    };

    const updateData = (e) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(
            "🚀 ~ file: ReceivingForms.jsx:59 ~ handleFormSubmit ~ data:",
            formData
        );
    };

    return (
        <KeeperLayout>
            <div className="px-5 py-5">
                <h1 className="text-[1.5rem] font-bold mb-5">
                    Goods Coming In
                </h1>
                <div className="w-full bg-white min-h-[10rem] px-5 py-5">
                    <form
                        action=""
                        className="w-full flex flex-col"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <label htmlFor="suppler_by" className="mr-3">
                                    <span className="mr-3 font-bold text-[1.2rem]">
                                        Supplied By
                                    </span>
                                    <input type="text" name="" id="" />
                                </label>
                                <label htmlFor="suppler_from">
                                    <span className="mr-3 font-bold text-[1.2rem]">
                                        Supplied From
                                    </span>
                                    <input type="text" name="" id="" />
                                </label>
                            </div>
                            <span className="text-blue-500">date</span>
                        </div>
                        <div className="relative">
                            <h2 className="font-bold text-[1.2rem] bg-slate-100 px-2 py-1 mb-5">
                                Goods Form:
                            </h2>

                            <table className="border-separate border-spacing-x-3 border-spacing-y-3 w-10/12">
                                <thead>
                                    <tr>
                                        <th className="text-left">Category</th>
                                        <th className="text-left">Product</th>
                                        <th className="text-left w-[8rem]">
                                            Quantity
                                        </th>
                                        <th className="w-[1rem]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select
                                                name="category"
                                                id=""
                                                className="w-full"
                                                onChange={updateData}
                                                value={formData["category"]}
                                            >
                                                <option>Choose Category</option>

                                                <option value="Category 1">
                                                    Category 1
                                                </option>
                                                <option value="Category 2">
                                                    Category 2
                                                </option>
                                                <option value="Category 3">
                                                    Category 3
                                                </option>
                                                <option value="Category 4">
                                                    Category 4
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <select
                                                name="product"
                                                id=""
                                                className="w-full"
                                                onChange={updateData}
                                            >
                                                <option>Choose Product</option>

                                                <option value="Product 1">
                                                    Product 1
                                                </option>
                                                <option value="Product 2">
                                                    Product 2
                                                </option>
                                                <option value="Product 3">
                                                    Product 3
                                                </option>
                                                <option value="Product 4">
                                                    Product 4
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id=""
                                                onChange={updateData}
                                                className="text-right w-full"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                className="w-8 h-8 px-1 py-1 bg-slate-100 rounded-full self-end"
                                                onClick={handleAddField}
                                            >
                                                <BiPlus className="text-black text-[1.5rem]" />
                                            </button>
                                        </td>
                                    </tr>
                                    {fields.map((obj) => obj.field(obj.key))}
                                </tbody>
                            </table>
                        </div>

                        <button
                            className="self-end bg-blue-500 px-3 py-2 text-white w-[8rem] rounded-md my-5"
                            type="submit"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </KeeperLayout>
    );
}

export default ReceivingForms;
