import React from "react";
import {useTheme} from "../context/ThemeContext";


function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            Active Theme:{theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change on Header</button>
        </div>
    )
}

export default Header;