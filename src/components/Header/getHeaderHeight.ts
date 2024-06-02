const getHeaderHeight = (): number => {
    const mainHeader = document.getElementById("header");


    if (mainHeader) {
        return mainHeader.offsetHeight;
    } else {
        return 100; // Default value if any of the elements are not found
    }
};

export default getHeaderHeight;
