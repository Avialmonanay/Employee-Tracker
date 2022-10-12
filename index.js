const mysql = require('mysql2')
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'bob ross paint night',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  )

  var mainMenu = () =>{
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'mainMenu',
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Departmnet", "Add A Roll", "Add An Employee","Update An Employee's Role","Exit" ],
    }
  ])
  .then((menuChoice) => {
    
    userInput = menuChoice.mainMenu
    console.log (userInput)
    if (userInput == "View All Departments"){
        viewDepartments()
    }
    else if (userInput == "View All Roles") {
        viewRoles()
    }
    else if (userInput == "View All Employees") {
        viewEmployees()
    }
    else if (userInput == "Add A Departmnet") {
        addDepartment()
    }
    else if (userInput == "Add A Roll") {
        addRoll()
    }
    else if (userInput == "Add An Employee") {
        addEmployee()
    }
    else if (userInput == "Update An Employee's Role") {
        updateEmployee()
    }
    else if (userInput == "Exit") {
        exit()
    }
    else {
        console.log ("no input")
    }
})
}

    var viewDepartments = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'Would you like to return to the menu or exit?',
            name: 'rtn',
            choices: ["Return", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else {
                exit()
            }
        })
    }

    var viewRoles = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'Would you like to return to the menu or exit?',
            name: 'rtn',
            choices: ["Return", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else {
                exit()
            }
        })
    }

    var viewEmployees = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'Would you like to return to the menu or exit?',
            name: 'rtn',
            choices: ["Return", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else {
                exit()
            }
        })
    }

    var addDepartment = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'rtn',
            choices: ["Add Another","Main Menu", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else if (userInput == "Add Another"){
                addDepartment()
            }
            else {
                exit()
            }
        })
    }

    var addRoll = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'rtn',
            choices: ["Add Another","Main Menu", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else if (userInput == "Add Another"){
                addRoll()
            }
            else {
                exit()
            }
        })
    }

    var addEmployee = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'rtn',
            choices: ["Add Another","Main Menu", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else if (userInput == "Add Another"){
                addEmployee()
            }
            else {
                exit()
            }
        })
    }

    var updateEmployee = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
          {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'rtn',
            choices: ["Update Another","Main Menu", "Exit"],
          }
        ])
        .then((rtn) => {
            userInput = rtn.rtn
            if (userInput == "Return") {
                mainMenu()
            }
            else if (userInput == "Update Another"){
                updateEmployee()
            }
            else {
                exit()
            }
        })
    }

    var exit = () => {
        console.log("I Made It Here")
    }


  mainMenu()