// IIFE -- Immediately Invoked 
(function()
{

    function DisplayHome()
    {
        console.log("Home Page")

        let AboutUsButton = document.getElementById("AboutUsButton");
        AboutUsButton.addEventListener("click", function()
        {
            location.href = "about.html";
        })

        // Step 1 - get reference to entry point(s)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;

        // Step 2 - Create a HTML Element in memory
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the ArticleParagraph</p>`;

        // Step 3 - Configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph!";
        let firstString  = "This is";
        let secondString  = `${firstString} the Main Paragraph`;
        MainContent.textContent = secondString;
        ArticleParagraph.setAttribute("class", "container");


        // Step 4 - Perform insertion / deletion

        //example of inster after
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProjectsPage()
    {
        console.log("Our Projects Page");
    }

    function DisplayServicesPage()
    {
        console.log("Our Services Page");
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function()
        {
            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");
        if(localStorage.length > 0)
        {
            let contactList = document.getElementById("contactList");

            let data = ""; 

            let keys = Object.keys(localStorage); 

            let index = 1; 

            
            for (const key of keys) 
            {
                let contactData = localStorage.getItem(key);

                let contact = new Contact();
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;

                index++;
            }

            contactList.innerHTML = data;
        }
    }

    function Start()
    {
        console.log("App Started!!");

        switch (document.title) {
            case "Home":
              DisplayHome();
              break;
            case "About Us":
              DisplayAboutPage();
              break;
            case "Projects":
              DisplayProjectsPage();
              break;
            case "Services":
              DisplayServicesPage();
              break;
            case "Contact List":
              DisplayContactListPage();
              break;
            case "Contact Us":
              DisplayContactPage();
              break;
          }
    }

    let myFunction = function() 
    {

    }

    window.addEventListener("load", Start);


})();