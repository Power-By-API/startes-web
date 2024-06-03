

const autoChangeImage = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const themeImage = document.getElementById(
            "theme-image"
        ) as HTMLImageElement | null;

        const updateImageSrc = () => {
            const isDarkMode =
                document.documentElement.getAttribute("data-theme") === "dark";

            if (themeImage) {
                themeImage.src = isDarkMode
                    ? "/images/hero_dark.svg"
                    : "/images/hero_light.svg";
            }
        };

        // Initialize image on page load
        updateImageSrc();

        // Observe the changes in the data-theme attribute of the html element
        const observer = new MutationObserver(updateImageSrc);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });
    });

};

autoChangeImage()
export default autoChangeImage





