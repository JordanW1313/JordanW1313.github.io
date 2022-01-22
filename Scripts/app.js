// IIFE -- Immediately Invoked 
(function()
{

    function DisplayHome()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        })
    }

    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
                DisplayHome();
                break
        }
    }

    let myFunction = function() 
    {

    }

    window.addEventListener("load", Start);


})();