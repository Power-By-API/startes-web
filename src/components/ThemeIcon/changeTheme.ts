
// Function that handles clicking on the toggle theme button
const handleToggleClick = () => {
    const element = document.documentElement;
    // Gets the current theme from the "data-theme" attribute
    const currentTheme = element.getAttribute("data-theme");
    // Toggle the theme between "light" and "dark"
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Sets the new theme to the "data-theme" attribute and saves it to localStorage
    element.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
};

// Determines the initial theme: obtained from localStorage if available, otherwise system preference (dark/light) is used
const theme = (() => {
    if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
})() as string;

// Gets the toggle theme element by its id
const themeToggle = document.getElementById("themeToggle");

const changeTheme = () => {
    document.addEventListener("DOMContentLoaded", () => {
        // Sets the initial theme in the "data-theme" attribute of the <html> element
        document.documentElement.setAttribute("data-theme", theme);
        // Add event listener if element exists, otherwise show error
        if (themeToggle) {
            themeToggle.addEventListener("click", handleToggleClick);
        }
    });
};

// Call the changeTheme function
changeTheme();

export default changeTheme;
