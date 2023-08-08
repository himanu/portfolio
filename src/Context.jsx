import { createContext, useState } from "react";
import { any }  from "prop-types";

const proptypes = {
    children: any
}
export const ThemeContext = createContext();
const Theme = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    )
}

Theme.propTypes = proptypes;
export default Theme;
