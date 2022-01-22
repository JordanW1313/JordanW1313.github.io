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

        // Step 1 - get reference to entry point(s)
        let MainContent = document.getElementsByTagName("main")[0];

        // Step 2 - Create a HTML Element in memory
        let MainParagraph = document.createElement("p");

        // Step 3 - Configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph!";

        // Step 4 - Perform insertion / deletion

        //example of inster after
        MainContent.appendChild(MainParagraph);

        // example of insert before
        //MainContent.before(MainParagraph);

        // example of deletion
        //document.getElementById("AboutUsButton").remove();
        AboutUsButton.remove();
        
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