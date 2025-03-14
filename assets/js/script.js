function changeMode() 
{
    var element = document.body;
    element.classList.toggle("darkMode");
    element.classList.add("fadeAnimation");

    setTimeout(function(){
        element.classList.remove("fadeAnimation");
    }, 1000);
}