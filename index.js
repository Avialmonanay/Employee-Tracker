const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

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

    viewDepartments = () => {
        db.query('SELECT * FROM departments', (err, results) => {
            console.table(results)
            mainMenu()
        })
    }

    var viewRoles = () => {
        db.query('SELECT roles.id AS ID, roles.role_name AS TITLE, roles.role_salary AS SALARY, departments.department_name FROM roles JOIN departments ON  roles.department = departments.id;', function (err, results) {
            console.table(results);
            mainMenu()
          });

    }

    var viewEmployees = () => {
        console.log("I MADE IT HERE")
        db.query('SELECT employees.id AS ID, employees.first_name AS  FNAME, employees.last_name AS LNAME, roles.role_name AS TITLE, roles.role_salary AS SALARY, employees.manager AS MANAGER , departments.department_name AS DEPARTMENT FROM employees JOIN roles ON employees.role_ID = roles.id JOIN departments ON  roles.department = departments.id;', function (err, results) {
            console.table(results);
            mainMenu()
          })

    }

    var addDepartment = () => {
        console.log("I Made It Here")

    inquirer
    .prompt([
        {
        type: 'Input',
        message: 'What is the Departments Name?',
        name: 'dName',
        }
    ])
    .then((departmentInfo) => {
        var departmentName = departmentInfo.dName

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
            if (userInput == "Main Menu") {
                mainMenu()
            }
            else if (userInput == "Add Another"){
                addDepartment()
            }
            else {
                exit()
            }
        })
    })
    }
    var addRoll = () => {
        console.log("I Made It Here")

    inquirer
    .prompt([
        {
        type: 'Input',
        message: 'What is the Roles Name?',
        name: 'rName',
        },
        {
        type: 'Input',
        message: 'What is the Roles Salary?',
        name: 'rSalary',
        },
        {
        type: 'Input',
        message: 'What department ID is the roll apart of?',
        name: 'rDepartment',
        }
    ])
    .then((rollInfo) => {
        var rollName = rollInfo.dName
        var rollSalary = rollInfo.rSalary
        var rollDepartment = rollInfo.rDepartment

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
            if (userInput == "Main Menu") {
                mainMenu()
            }
            else if (userInput == "Add Another"){
                addDepartment()
            }
            else {
                exit()
            }
        })
    })
    }

    var addEmployee = () => {
        console.log("I Made It Here")

        inquirer
        .prompt([
            {
            type: 'Input',
            message: 'What is the employees first name?',
            name: 'eFname',
            },
            {
            type: 'Input',
            message: 'What is the employees last name?',
            name: 'eLname',
            },
            {
            type: 'Input',
            message: 'Who is the employees Manager??',
            name: 'eManager',
            }
        ])
        .then((employeeInfo) => {
            var firstName = employeeInfo.eFname
            var lastName = employeeInfo.eLname
            var manager = employeeInfo.eManager
    
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
                if (userInput == "Main Menu") {
                    mainMenu()
                }
                else if (userInput == "Add Another"){
                    addDepartment()
                }
                else {
                    exit()
                }
            })
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