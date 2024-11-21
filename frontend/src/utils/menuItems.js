import {dashboard, expenses, home, transactions, trend} from '../utils/Icons'

export const menuItems = [
   /*{
        id: 0,
        title: 'Home',
        icon: home,
        link: '/dashboard'
    },*/
    {
        id: 1,
        title: 'Statistics',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/transactions",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/incomes",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/expenses",
    },
]