//Task 2: adding employee cards dynamically
const employeeContainer = document.getElementById("employeeContainer"); //This selects the div container for the soon-to-be employee cards


function createEmployee(name, position) { //Start by creating a function that takes the arguments name and position
    const employeeArray = Array.from(document.querySelectorAll('.employee')); //create an array of all instances of tags with the employee class 
    const employeeCard = document.createElement('div'); //use the createElement method to create a div tag and save it as a variable of this function

    employeeCard.setAttribute("class", "employee"); //set the attribute of class to be employee
    employeeCard.setAttribute("id", `Employee${employeeArray.length + 1}`); //set the attribute of id to be the number of instances in the created array plus one. This could lead to errors if an employee is removed that isnt the last instance. For example, if there are 5 employees and the third one is removed, the next one added will be employee5. This will result in two instances with the same id.

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
    removeButton.addEventListener("click", () => { //add an event listener to the button, checking for when it is clicked
        employeeContainer.removeChild(employeeCard); //once it is, remove the card from the parent container
    });
}

createEmployee("Jack", "Manager");
createEmployee("Jack", "Manager");
createEmployee("Jack", "Manager"); //test data