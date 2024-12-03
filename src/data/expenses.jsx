import { Icon } from "../components/Elements/Icon";

export const expensesBreakdowns = [
    {
      id: 1,
      category: "Housing",
      amount: 250,
      percentage: 15,
      icon: <Icon.Housing />,
      arrow: <Icon.ArrowUp />,
    },
    {
      id: 2,
      category: "Food",
      amount: 350,
      percentage: 8,
      icon: <Icon.Food />,
      arrow: <Icon.ArrowDown />,
    },
    {
      id: 3,
      category: "Transportation",
      amount: 50,
      percentage: 12,
      icon: <Icon.Transportation />,
      arrow: <Icon.ArrowDown />,
    },
    {
      id: 4,
      category: "Entertainment",
      amount: 80,
      percentage: 15,
      icon: <Icon.Entertainment />,
      arrow: <Icon.ArrowDown />,
    },
    {
      id: 5,
      category: "Shopping",
      amount: 420,
      percentage: 25,
      icon: <Icon.Shopping />,
      arrow: <Icon.ArrowUp />,
    },
    {
      id: 6,
      category: "Others",
      amount: 650,
      percentage: 23,
      icon: <Icon.Others />,
      arrow: <Icon.ArrowUp />,
    },
  ];
  
  export const expensesStatistics = [
    {
      id: 1,
      date: "2023-05-17",
      day: "Sun",
      amountThisWeek: 250000,
      amountLastWeek: 50000,
    },
    {
      id: 2,
      date: "2023-05-18",
      day: "Mon",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 3,
      date: "2023-05-19",
      day: "Tue",
      amountThisWeek: 10000,
      amountLastWeek: 50000,
    },
    {
      id: 4,
      date: "2023-05-20",
      day: "Wed",
      amountThisWeek: 50000,
      amountLastWeek: 50000,
    },
    {
      id: 5,
      date: "2023-05-21",
      day: "Thu",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
    {
      id: 6,
      date: "2023-05-22",
      day: "Fri",
      amountThisWeek: 250000,
      amountLastWeek: 10000,
    },
    {
      id: 7,
      date: "2023-05-23",
      day: "Sat",
      amountThisWeek: 50000,
      amountLastWeek: 10000,
    },
  ];
  
  export default expensesBreakdowns;