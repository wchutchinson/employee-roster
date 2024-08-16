// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = [];
  let addMore = true;

    while (addMore){
    let firstName = prompt("Enter first name.");
    if (firstName && isNaN(firstName)) {
        firstName = firstName.toLowerCase();
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    } else {
        alert("Please enter a valid first name.");
        return; // exit if first name is invalid
    }
    
    let lastName = prompt("Enter last name.");

    if (lastName && isNaN(lastName)) {
        lastName = lastName.toLowerCase();
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }else {
        alert("Please enter a valid last name.");
        return; // exit if last name is invalid
    }

    let salaryInput = prompt("Enter salary."); 
    let salary = parseFloat(salaryInput);
    if (isNaN(salary) || salary < 0) {
        alert("Please enter a valid salary.");
        return; //exit if salary is invalid
        } else {
            salary = salary.toFixed(2);
        }
        
        // Create the employee object ans push to the array
        let employee = {
            firstName: firstName,
            lastName: lastName,
            salary: parseFloat(salary) // converting back to number with two decimal places
        };

        employeesArray.push(employee);

        // Ask if user wants to add more employees
        let addMore = confirm("Would you like to add another employee?");
        if (addMore !== true) {
            return employeesArray;
        }
    }
    return employeesArray;    
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const sumSalary = employeesArray.reduce((accumulator, employeesArray) => accumulator + employeesArray.salary, 0);
  const avgSalary = sumSalary / employeesArray.length;
  const avgSalaryTwoDecimal = avgSalary.toFixed(2);
  const averageSalaryWithTwoDecimals = avgSalaryTwoDecimal.toString();
  console.log(typeof avgSalaryString);
  console.log(`The average salary between our ${employeesArray.length} employee(s) is $${averageSalaryWithTwoDecimals}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    const randomEmployee = employeesArray[randomIndex];
    console.log("Congratulations to " + randomEmployee.firstName + " " + randomEmployee.lastName + ", our random drawing winner!");
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

 displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);