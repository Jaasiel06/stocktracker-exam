import { CompanyProfile } from "./company-profile.interface";


export interface StockQuote {
    symbol: string;
    c: number;
    d: number;
    dp: number;
    h: number;
    i: number;
    o: number;
    pc: number;
    companyProfile: CompanyProfile | undefined
}

//  Response Attributes Description:
//     c
//     Current price

//     d
//     Change

//     dp
//     Percent change

//     h
//     High price of the day

//     l
//     Low price of the day

//     o
//     Open price of the day

//     pc
//     Previous close price