export enum DataApi {
    QUOTE = 1,
    COMPANY_PROFILE = 2,
    SENTIMENT = 3,
    SYMBOL_SEARCH = 4,
}
export const dataApiRootMap: { [api: string]: string } = {
    "1": "api/v1/quote",
    "2": "api/v1/stock/profile2",
    "3": "api/v1/stock/insider-sentiment",
    "4": "api/v1/search",
};
