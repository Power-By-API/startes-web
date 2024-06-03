// changeTheme


const changeTheme = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // Determines the initial theme: obtained from localStorage if available, otherwise the system preference (dark/light) is used
        const theme = (() => {
            if (localStorage.getItem("theme")) {
                return localStorage.getItem("theme");
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        })() as string;

        // Sets the initial theme in the "data-theme" attribute of the <html> element
        document.documentElement.setAttribute("data-theme", theme);
        // Save the initial theme to localStorage
        localStorage.setItem("theme", theme);

        // Function that handles the click on the theme toggle button
        const handleToggleClick = () => {
            const element = document.documentElement;
            // Gets the current theme from the "data-theme" attribute
            const currentTheme = element.getAttribute("data-theme");
            // Alternate the theme between "light" and "dark"
            const newTheme = currentTheme === "light" ? "dark" : "light";

            // Sets the new theme to the "data-theme" attribute and saves it to localStorage
            element.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        };

        // Gets the theme's toggle element by its id
        const themeToggle = document.getElementById("themeToggle");
        // Add the event listener if the element exists, otherwise it shows an error
        if (themeToggle) {
            themeToggle.addEventListener("click", handleToggleClick);
        }
    });
};
changeTheme()
export default changeTheme;