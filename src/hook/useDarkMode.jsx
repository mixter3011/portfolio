import { useEffect, useState } from "react"

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (window.localStorage.getItem("theme") === "light") {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false)
        }
        else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleMode = () => {
        console.log(isDarkMode)
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    return {
        isDarkMode,
        toggleMode,
    };
}

export default useDarkMode;