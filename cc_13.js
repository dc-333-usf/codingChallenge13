//Task 2: adding employee cards dynamically.
const employeeContainer = document.getElementById("employeeContainer"); //This selects the div container for the soon-to-be employee cards
const employeeAllList = [];

function createEmployee(name, position) { //Start by creating a function that takes the arguments name and position
    const employeeCard = document.createElement('div'); //use the createElement method to create a div tag and save it as a variable of this function

    employeeCard.setAttribute("class", "employee"); //set the attribute of class to be employee
    employeeCard.setAttribute("id", `Employee${employeeAllList.length + 1}`); //set the attribute of id to be the number of instances in the created array plus one.

    employeeCard.innerHTML = `
    <h2>Name: ${name}</h2>
    <p>Position: ${position}</p>
    <button class = "removeButton">Remove</button>`; //set the inner html of the card to include a header with the employee name, a paragraph with the employee position, and a button titled Remove
    employeeCard.style.backgroundColor = "gray"; //set the background of the card
    employeeCard.style.borderRadius = "5px"; //set the border radius, giving rounded corners
    employeeCard.style.textAlign = "center"; //center the text within the container
    employeeCard.style.width = "33.33%"; //allow the card to only take up a third of the webpage

    employeeContainer.appendChild(employeeCard); //add the card to the employee container

    const removeButton = employeeCard.querySelector('.removeButton'); //select the remove button of the card and save it as a variable
    removeButton.addEventListener("click", (event) => { //add an event listener to the button, checking for when it is clicked
        employeeContainer.removeChild(employeeCard); //once it is, remove the card from the parent container
        event.stopPropagation(); //Task 4, stop the click event from bubbling up, causing the event listener on the employee container to be triggered when the remove button is pressed
    });

    //Task 5: inline editing of employee details
    employeeCard.addEventListener('dblclick', () => { //add an event listener for a double click on the created employee card

        const currentForm = employeeCard.querySelector('form'); //set the current form equal to a query selector that checks if there is a tag with the id "form" in the employee card
        if (currentForm) { //if a form is found, meaning the card has already been double clicked and all the rest of the code has run,
            return; //return, stopping the rest of the code from running.
        } //this piece of code is just to make sure you can't continue to double click on one card and get new forms

        const remove1 = employeeCard.querySelector('h2'); 
        const remove2 = employeeCard.querySelector('p');
        const remove3 = employeeCard.querySelector('button'); //set each tag inside the employee card as a constant to be removed
        remove1.style.display = "none";
        remove2.style.display = "none";
        remove3.style.display = "none"; //remove the display for all these variables using css, they will be replaced with our form

        const employeeForm = document.createElement('form'); //create a new html element, specifically a form, and save it as a constant
        employeeForm.style.display = "block"; //display the form using css

        employeeForm.setAttribute("class", "form"); //set the class of the newly created form to be "form"
        employeeForm.setAttribute("id", `${employeeCard.id}`); //set the id of the form to be equal to the id of the employee card. This will ensure each form can be uniquely identified to one employee

        const inputId = `inputValue-${employeeCard.id}`; // 
        const inputPosition = `inputPosition-${employeeCard.id}`; //It is important that these values are unique for each form. If they are not, and multiple forms are opened on separate cards, the cards below other cards with open forms will save the value of the topmost card's form
        employeeForm.innerHTML = `
            <label>Name:</label>
            <input value = "${name}" id = "${inputId}"><br>
        
            <label>Position:</label>
            <input value = "${position}" id = "${inputPosition}"><br>
        
            <button type = "submit">Save</button>
            <button type = "button" id = "cancelButton">Cancel</button>`; //here we create the html for the form: the pre-populated information, "value" property, is the current name and position of the person on the card, then the ids are related to the employee ids, as well as a string so that these two values are not the same

        employeeForm.addEventListener("submit", (event) => { //on the form, we add an event listener, checking for when the save button is pressed. The save button was give the type "submit" in the html above
            event.preventDefault(); //prevent the page from reloading
            
            name = document.getElementById(`${inputId}`).value; //here, we overwrite the name variable to be equal to the value of the element with the id of the variable "inputId", which is the name that is submitted to the form
            position = document.getElementById(`${inputPosition}`).value; //do the same with position variable

            employeeCard.innerHTML = `
                <h2>Name: ${name}</h2>
                <p>Position: ${position}</p>
                <button class = "removeButton">Remove</button>`; //then set the html of the employee card to be the same as before, but with the updated name and position variables

            const removeButton = employeeCard.querySelector('.removeButton'); //select the remove button of the card and save it as a variable
            removeButton.addEventListener("click", (event) => { //add an event listener to the button, checking for when it is clicked
            employeeContainer.removeChild(employeeCard); //once it is, remove the card from the parent container
            event.stopPropagation(); //stop the click event from bubbling up, causing the event listener on the employee container to be triggered when the remove button is pressed
            });
        });

        const cancelButton = employeeForm.querySelector('#cancelButton'); //set a constant to be equal to the tag in the employee form with the id "cancelButton"
        cancelButton.addEventListener("click", (event) => { //add a click event listener to the cancel button
            event.preventDefault(); //prevent the page from reloading
            employeeCard.removeChild(employeeForm); //remove the form from the employee card

            remove1.style.display = "block";
            remove2.style.display = "block";
            remove3.style.display = "block"; //use the constants from earlier to bring back their display using css
        });

        employeeCard.appendChild(employeeForm); //add the employee form to the employee card once it is built
    });

    employeeAllList.push(employeeCard); //push each employee card to the array containing all employees. This is just to ensure each employee gets a unqiue id
}

createEmployee("Jack", "Manager");
createEmployee("Jill", "Associate");
createEmployee("Hill", "CFO"); //test data

//Task 3: converting NodeLists to arrays for bulk updates.
const allEmployees = Array.from(document.querySelectorAll('.employee')); //create an aray from all the elements with the class employee
allEmployees.forEach(n => { //for each instance,
    n.style.color = "green"; //change text color to green
    n.style.backgroundColor = "black"; //set the background of the card
});

//Task 4: implementing removal of employee cards with event bubbling.
employeeContainer.addEventListener("click", () => { //add a click event listener to the employee container to tell when it is clicked
    console.log("Parent container clicked."); //log when each click happens
});