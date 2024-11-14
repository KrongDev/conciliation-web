import {createContext} from "react";


type GlobalSearchContextType = {
    searchValue: string,
    onChangeSearchValue: (value: string) => void;
}

const defaultGlobalSearchContextValue: GlobalSearchContextType = {
    searchValue: '',
    onChangeSearchValue: () => {}
}

const GlobalSearchContext = createContext<GlobalSearchContextType>(defaultGlobalSearchContextValue);
export default GlobalSearchContext;
