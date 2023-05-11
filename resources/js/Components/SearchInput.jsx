import { useCallback, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput({
    handleChange = () => {},
    handleSelectedFilter = () => {},
    changeValue,
    hasFilters = true,
    filters = ["Omaya", "Concord", "Shaolong", "Travel man"],
}) {
    const getSelected = useCallback(() => {
        document.querySelector(".filter").addEventListener("click", (e) => {
            if (e.target.classList.contains("filter-item")) {
                handleSelectedFilter(e.target.textContent);
            }
        });
    }, []);

    useEffect(() => {
        getSelected();
    }, [getSelected]);

    return (
        <div className="flex items-center justify-center bg-gray-200 px-1 h-[2.5rem]">
            <div className="flex item-center justify-center px-2">
                <CiSearch className="text-[1.5rem] text-gray-500" />
            </div>
            <input
                type="text"
                value={changeValue}
                id=""
                className="min-w-[10rem] px-2 py-1 ring-0 focus:ring-0 border-none outline-none bg-transparent"
                onChange={(e) => handleChange(e)}
            />
            {hasFilters && (
                <div className="px-2 border-l-gray-400 border-l-[1px] h-full flex items-center justify-center relative">
                    <div>Filter</div>
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        className="dropChecked w-full h-full peer absolute top-0 left-0 opacity-0"
                    />
                    <ul className="filter absolute top-[110%] right-0 invisible peer-checked:visible bg-gray-300  w-max max-h-0 peer-checked:max-h-[10rem] transition-all duration-200 overflow-hidden select-none cursor-pointer">
                        {filters.map((filter, i) => (
                            <li
                                className="filter-item px-3 py-2 hover:bg-gray-400"
                                key={i}
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchInput;
