
const getHeaderHeight = (): number => {
    const mainHeader = document.getElementById("header");


    if (mainHeader) {
        return mainHeader.offsetHeight;
    } else {
        return 100; // Default value if any of the elements are not found
    }
};

// Function to handle window resize event
const handleWindowResize = () => {
    const headerHeight = getHeaderHeight();

    // Get the div element with the ID "main-container"
    const mainContainer = document.getElementById("main-container");

    if (mainContainer) {
        // Add margin top
        mainContainer.style.paddingTop = `${headerHeight}px`;

    } else {
        console.error("The element with the ID 'main-container' was not found'");
    }
};
// First call to calculate header height
handleWindowResize()
// Add an event listener for the 'resize' event on the window
window.addEventListener("resize", handleWindowResize);

export default handleWindowResize





