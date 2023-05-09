import React from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/all";

const Pagination = () => {
  return (
    <div className="pagination-box flex justify-center mt-12">
        <button className="pagination-left rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
            <IoChevronBackOutline />
        </button>

        <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
            1
        </button>

        <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
            2
        </button>

        <button className="pagination-item rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
            3
        </button>

        <button className="pagination-right rounded w-[30px] h-[30px] flex items-center justify-center bg-white shadow mx-2">
            <IoChevronForwardOutline />
        </button>
    </div>
  )
}

export default Pagination