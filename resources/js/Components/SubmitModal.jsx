import React, { useState } from "react";
import ItemBoughtCard from "./ItemBoughtCard";
import ModalBox from "./ModalBox";
import Clickable from "./Clickable";

function SubmitModal({ submitModalState, handleSubmitState, data }) {
    return (
        <ModalBox
            state={submitModalState}
            closeCallback={handleSubmitState}
            classname="p-4 bg-light-blue w-[90vw] sm:w-[500px] h-[490px]"
        >
            <div className="h-[400px] overflow-y-scroll w-full">
                {data?.map((item) => (
                    <ItemBoughtCard />
                ))}
            </div>

            <Clickable className="p-2 bg-blue w-full text-white rounded my-4">
                Done
            </Clickable>
        </ModalBox>
    );
}

export default SubmitModal;
