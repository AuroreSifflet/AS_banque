import { expenses } from "./expenses";
import { incomes } from "./incomes";


export type dataCardType = {
    _id: string;
    user: string;
    incomes: incomes[];
    expences: expenses[];

   };