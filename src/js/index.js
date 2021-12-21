/**
 * Title: NSN Shopping
 * Description: E-commerce Website using React JS, Node JS, MySQL
 * Author: Samin Yasar
 * Date: 21/December/2021
 */

/* Hamburger Navigation Start */

const hamburgerIcon = document.getElementById("hamburgerIcon");
const mobileNavItemsContainer = document.getElementById(
    "mobileNavItemsContainer"
);
const navItemsCloseIcon = document.getElementById("navItemsCloseIcon");

hamburgerIcon.addEventListener("click", () => {
    mobileNavItemsContainer.classList.remove("w-0");
    mobileNavItemsContainer.classList.add("w-full");
});

navItemsCloseIcon.addEventListener("click", () => {
    mobileNavItemsContainer.classList.add("w-0");
    mobileNavItemsContainer.classList.remove("w-full");
});

/* Hamburger Navigation End */
