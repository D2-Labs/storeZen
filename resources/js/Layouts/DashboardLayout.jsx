import React from "react";
import { useState } from "react";
import {
    IoMdNotificationsOutline,
    TfiLayoutGrid2,
    AiOutlineShoppingCart,
    IoPricetagsOutline,
    IoPeopleOutline,
    VscListSelection,
    IoCloseOutline,
} from "react-icons/all";
import IconButton from "../Components/IconButton";
import Clickable from "../Components/Clickable";

import { Link } from "@inertiajs/react";

let navigation_icons = [
    {
        name: "Dashboard",
        icon: TfiLayoutGrid2,
        link: "",
    },

    {
        name: "Sales",
        icon: AiOutlineShoppingCart,
        link: "",
    },

    {
        name: "Statistics",
        icon: IoPricetagsOutline,
        link: "",
    },

    {
        name: "Users",
        icon: IoPeopleOutline,
        link: "",
    },
];

const DashboardLayout = ({
    children,
    nav_icons = navigation_icons,
    profile = "/sales/profile",
    notification = "/sales/notifications",
}) => {
    const [profileDropdownState, setProfileDropdownState] = useState(true);
    const [menuBtnState, setMenuBtnState] = useState(true);

    return (
        <div className="h-screen overflow-hidden relative">
            <nav className="flex justify-between items-center p-2 sm:px-4 h-[50px] sm:h-[60px] ">
                <IconButton
                    classname="text-lg sm:text-2xl bg-gray-200 mx-1 sm:hidden"
                    onClick={() => setMenuBtnState(!menuBtnState)}
                >
                    {menuBtnState ? <VscListSelection /> : <IoCloseOutline />}
                </IconButton>

                <div className="logo font-bold text-lg sm:text-2xl">
                    Store<span className="blue">Zen</span>
                </div>
                <div className="nav-left flex items-center relative">
                    <Link href={notification}>
                        <IconButton classname="text-lg sm:text-2xl bg-gray-200 mx-1">
                            <IoMdNotificationsOutline />
                        </IconButton>
                    </Link>

                    <IconButton
                        classname="text-sm sm:text-normal text-white bg-blue mx-1"
                        onClick={() =>
                            setProfileDropdownState(!profileDropdownState)
                        }
                    >
                        DS
                    </IconButton>

                    <div
                        className={`profile-dropdown absolute top-[55px] right-0 bg-white p-2 px-3 rounded w-max shadow z-20 ${
                            profileDropdownState && "hidden"
                        }`}
                    >
                        <Link href={profile}>
                            <Clickable className="dropdown-item hover:bg-blue-50 px-4 py-1 rounded">
                                Profile
                            </Clickable>
                        </Link>
                        <br />
                        <Clickable className="dropdown-item hover:bg-blue-50 px-4 py-1 rounded">
                            Log Out
                        </Clickable>
                    </div>
                </div>
            </nav>

            <div className="dashplate flex h-full ">
                <div
                    className={`navigations flex sm:items-center flex-col pl-2 pr-5 sm:pl-0 sm:pr-0 pt-5 w-max sm:w-[60px] h-full text-gray-600 fixed sm:static top-[50px] ${
                        menuBtnState ? "left-[-100vw]" : "left-0"
                    } z-20 bg-white shadow`}
                >
                    {nav_icons.map((icon, index) => (
                        <Link
                            href={icon.link}
                            className="flex items-center border-b sm:border-none"
                            key={index}
                        >
                            <IconButton
                                classname="text-lg sm:text-2xl my-2 relative"
                                name={icon.name}
                                key={icon.name}
                            >
                                <icon.icon />
                            </IconButton>
                            <span className="sm:hidden">{icon.name}</span>
                        </Link>
                    ))}
                </div>

                <div className="focus-area h-screen pb-[150px] w-full bg-light-blue relative overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
