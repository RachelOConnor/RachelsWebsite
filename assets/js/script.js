// For dark/light mode
function changeMode() 
{
    var element = document.body;
    element.classList.toggle("darkMode");

    if (element.classList.contains("darkMode")) 
    {
        localStorage.setItem("darkMode", "enabled");
    } else 
    {
        localStorage.setItem("darkMode", "disabled");
    }

    element.classList.add("fadeAnimation");

    setTimeout(function()
    {
        element.classList.remove("fadeAnimation");
    }, 1000);
}



// For page transitions
document.addEventListener('DOMContentLoaded', function(event) 
{
    if (localStorage.getItem("darkMode") === "enabled") 
    {
        document.body.classList.add("darkMode");
    }
    document.body.style.opacity = 1;
})


window.transitionToPage = function(href) 
{
    document.body.style.opacity = 0;
    setTimeout(function() 
    { 
        window.location.href = href
    }, 500)
}