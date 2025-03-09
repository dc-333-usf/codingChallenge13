//Task 2: adding employee cards dynamically.
const employeeContainer = document.getElementById("employeeContainer"); //This selects the div container for the soon-to-be employee cards
const employeeAllList = [];

function createEmployee(name, position) { //Start by creating a function that takes the arguments name and position
    const employeeCard = document.createElement('div'); //use the createElement method to create a div tag and save it as a variable of this function

    employeeCard.setAttribute("class", "employee"); //set the attribute of class to be employee
    employeeCard.setAttribute("id", `Employee${employeeAllList.length + 1}`); //set the attribute of id to be the number of instances in the created array plus one. This could lead to errors if an employee is removed that isnt the last instance. For example, if there are 5 employees and the third one is removed, the next one added will be employee5. This will result in two instances with the same id.

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
    //     employeeCard.addEventListener('dblclick', () => {

    //     const currentForm = employeeCard.querySelector('form');
    //     if (currentForm) {
    //         return;
    //     }

    //     const remove1 = employeeCard.querySelector('h2');
    //     const remove2 = employeeCard.querySelector('p');
    //     const remove3 = employeeCard.querySelector('button');
    //     remove1.style.display = "none";
    //     remove2.style.display = "none";
    //     remove3.style.display = "none";

    //     const employeeForm = document.createElement('form');
    //     employeeForm.style.display = "block";
    //     employeeForm.setAttribute("class", "Form");
    //     employeeForm.setAttribute("id", "newForm");
    //     employeeForm.innerHTML = `
    //         <label>Name:</label>
    //         <input value = "${name}" id = "inputValue"><br>
        
    //         <label>Position:</label>
    //         <input value = "${position}" id = "inputPosition"><br>
        
    //         <button type = "submit">Save</button>
    //         <button type = "button" id = "cancelButton">Cancel</button>`;

    //     employeeForm.addEventListener("submit", (event) => {
    //         event.preventDefault();
            
    //         updatedName = document.getElementById("inputValue").value;
    //         updatedPosition = document.getElementById("inputPosition").value;

    //         employeeCard.innerHTML = `
    //             <h2>Name: ${updatedName}</h2>
    //             <p>Position: ${updatedPosition}</p>
    //             <button class = "removeButton">Remove</button>`;

    //         const removeButton = employeeCard.querySelector('.removeButton'); //select the remove button of the card and save it as a variable
    //         removeButton.addEventListener("click", (event) => { //add an event listener to the button, checking for when it is clicked
    //         employeeContainer.removeChild(employeeCard); //once it is, remove the card from the parent container
    //         event.stopPropagation(); //Task 5, stop the click event from bubbling up, causing the event listener on the employee container to be triggered when the remove button is pressed
    //         });
    //     });

    //     const cancelButton = employeeForm.querySelector('#cancelButton');
    //     cancelButton.addEventListener("click", (event) => {
    //         event.preventDefault();
    //         employeeForm.style.display = "none";

    //         const remove1 = employeeCard.querySelector('h2');
    //         const remove2 = employeeCard.querySelector('p');
    //         const remove3 = employeeCard.querySelector('button');
    //         remove1.style.display = "block";
    //         remove2.style.display = "block";
    //         remove3.style.display = "block";
    //     });

    //     employeeCard.appendChild(employeeForm);
    // });

    employeeAllList.push(employeeCard);
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