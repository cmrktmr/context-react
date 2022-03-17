import { useContext } from "react";

import React from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {

    const { theme, setTheme } = useContext(ThemeContext);
    console.log(theme)
    return <div>
        Active Theme: {theme}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}> Change</button>
    </div>
}


export default Button;