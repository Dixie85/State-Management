import { createContext, useState } from "react";

const ToggleContext = createContext({});

export const ToggleProvider = ({children}) => {
const [isToggleled, setIsToggeled] = useState(false)
console.log(isToggleled);

    return <ToggleContext.Provider value={{isToggleled, setIsToggeled}}>
        {children}
    </ToggleContext.Provider>
};

export default ToggleContext