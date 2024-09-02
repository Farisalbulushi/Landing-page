/**
*
* Manipulating the DOM exercise.
* Exercise programmatically builds navigation,
* scrolls to anchors from navigation,
* and highlights section in viewport upon scrolling.
*
* Dependencies: None
*
* JS Version: ES2015/ES6
*
* JS Standard: ESlint
*
*/

/**
* Comments should be present at the beginning of each procedure and class.
* Great to have comments before crucial code sections within the procedure.
*/

/**
* Define Global Variables
*
*/

const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
* End Global Variables
* Start Helper Functions
*/

// For of function to iterate through every element in the array
function createListItem() {
for (section of sections) {
// Get element's name
const sectionName = section.getAttribute("data-nav")
// Get element's id
const sectionLink = section.getAttribute("id")
//Create the list item
listItem = document.createElement("li")
listItem.innerHTML = `<a class="menu__link" href="#${sectionLink}">${sectionName}</a>`
navbarList.appendChild(listItem)
}
}

function sectionPosition(section){
return section.getBoundingClientRect().top
}

function removeClass(section){
section.classList.remove("your-active-class")
}

function addClass(section){
if(sectionPosition(section) <= 150 && sectionPosition(section)>= -700){
    section.classList.add("your-active-class")
    }
    }

function setActiveClass(){
    for(section of sections){
    removeClass(section)
    addClass(section)
    }
    }


    /**
    * End Helper Functions
    * Begin Main Functions
    *
    */

    // build the nav

    createListItem()

    // Add class 'active' to section when near top of viewport

    document.addEventListener("scroll", setActiveClass)

    // Scroll to anchor ID using scrollTO event


    /**
    * End Main Functions
    * Begin Events
    *
    */

    // Build menu

    // Scroll to section on link click

    // Set sections as active
