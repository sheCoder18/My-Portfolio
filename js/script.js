// when we click on menu or icon it will either add or remove the open class


function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open"); 
}

