import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


function Header() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            Active Theme:{theme}
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change on Header</button>
        </div>
    )
}

export default Header;