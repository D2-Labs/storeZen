import { IoMdNotificationsOutline, TfiLayoutGrid2, AiOutlineShoppingCart, IoPricetagsOutline, IoPeopleOutline} from 'react-icons/all';

const navlinks = [
    {
        'name': 'Dashboard',
        'icon': TfiLayoutGrid2,
        'link': '/sales',
    },

    {
        'name': 'Sales',
        'icon': AiOutlineShoppingCart,
        'link': '/sales/sales-made',
    },

    {
        'name': 'Statistics',
        'icon': IoPricetagsOutline,
        'link': '/sales/sales-stats',
    },

    {
        'name': 'Users',
        'icon': IoPeopleOutline,
        'link': '/sales/profile',
    }
]

export default navlinks;