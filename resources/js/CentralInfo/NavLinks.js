import {
    IoMdNotificationsOutline,
    TfiLayoutGrid2,
    AiOutlineShoppingCart,
    IoPricetagsOutline,
    IoPeopleOutline,
    HiOutlineSquare3Stack3D,
    MdFormatIndentDecrease,
    MdFormatIndentIncrease,
} from "react-icons/all";

export const salesLinks = [
    {
        name: "Dashboard",
        icon: TfiLayoutGrid2,
        link: "/sales",
    },

    {
        name: "Sales",
        icon: AiOutlineShoppingCart,
        link: "/sales/sales-made",
    },

    {
        name: "Statistics",
        icon: IoPricetagsOutline,
        link: "/sales/sales-stats",
    },

    {
        name: "Users",
        icon: IoPeopleOutline,
        link: "/sales/profile",
    },
];

export const keeperLinks = [
    {
        name: "Users",
        icon: IoPeopleOutline,
        link: "/keeper/sales-persons",
    },
    {
        name: "Products",
        icon: HiOutlineSquare3Stack3D,
        link: "/keeper/product-listings",
    },
    {
        name: "Orders",
        icon: MdFormatIndentDecrease,
        link: "/keeper/goods-order-form",
    },
    {
        name: "Goods coming in",
        icon: MdFormatIndentIncrease,
        link: "/keeper/goods-receiving-form",
    },
];
