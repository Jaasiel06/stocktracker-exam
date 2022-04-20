export enum DataApi {
    QUOTE = 1,
    SYMBOLSEARCH = 2,
}
export const dataApiRootMap: { [api: string]: string } = {
    "1": "docs/api/quote",
    "2": "docs/api/symbol-search",
};
