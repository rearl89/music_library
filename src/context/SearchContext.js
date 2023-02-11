import { createContext } from "react";

export const SearchContext = createContext({
    term: '',
    handleString: () => {}
})