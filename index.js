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
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Departmnet", "Add A Role", "Add An Employee","Update An Employee's Role","Exit" ],
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
    else if (userInput == "Add A Role") {
        addRole()
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
        db.query('SELECT employees.id AS ID, employees.first_name AS  FIRST_NAME, employees.last_name AS LAST_NAME, roles.role_name AS TITLE, roles.role_salary AS SALARY, employees.manager AS MANAGER , departments.department_name AS DEPARTMENT FROM employees JOIN roles ON employees.role_ID = roles.id JOIN departments ON  roles.department = departments.id ORDER BY ID;', function (err, results) {
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
        var type = "department"
        var departmentName = departmentInfo.dName
        db.query("INSERT INTO departments (department_name) VALUES (?);", departmentName, (err, results) => {
        console.log("Added!");
        whatNext(type)
        })
    })
    }
    var addRole = () => {
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
        message: 'What department ID is the Role apart of?',
        name: 'rDepartment',
        }
    ])
    .then((roleInfo) => {
        var type = "role"
        var roleName = roleInfo.rName
        var roleSalary = roleInfo.rSalary
        var roleDepartment = roleInfo.rDepartment
        db.query("INSERT INTO roles (role_name, role_salary, department) VALUES (?,?,?)", [roleName, roleSalary, roleDepartment], (err,results) => {
            if (err) {
                console.log(err);
              }
        console.log("Added!")
        whatNext(type)
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
            message: 'Who is the employees Manager?',
            name: 'eManager',
            },
            {
            type: 'Input',
            message: 'Enter the Role ID of the employee',
            name: 'eRole',
            }
        ])
        .then((employeeInfo) => {
            var firstName = employeeInfo.eFname
            var lastName = employeeInfo.eLname
            var manager = employeeInfo.eManager
            var role = employeeInfo.eRole
            var type = "employee"
            db.query("INSERT INTO employees (first_name, last_name, manager,role_ID) VALUES (?,?,?,?);", [firstName, lastName, manager,role], (err,results) => {
                if (err) {
                    console.log(err);
                  }
            console.log("Added!")
            whatNext(type)
            })
        })
    }

    var updateEmployee = () => {
        console.log("I Made It Here")
        
            inquirer
            .prompt([
                {
                  type: 'list',
                  message: 'What would you like to do?',
                  name: 'updateType',
                  choices: ["First Name", "Last Name", "Manager", "Role"],
                }
              ])
            .then((updateChoice) => {
                console.log("Help Me")
                var updateType = updateChoice.updateType
                console.log(updateType)
                if (updateType == "First Name"){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the employees ID?',
                            name: 'eID',
                        },
                        {
                            type: 'input',
                            message: 'What is the employees new First Name?',
                            name: 'name',
                        }
                    ])
                          .then((firstName)=>{
                            var updateType = "employee"
                            var eID = firstName.eID 
                            var fName = firstName.name
                            db.query('UPDATE employees SET first_name = ? WHERE id = ?', [fName, eID], (err, results) => {
                                if (err) {
                                    console.log(err);
                                  }
                            console.log("Added!")
                            whatNextUpdate(updateType)   
                            })
                          })
                    }
                else if (updateType == "Last Name"){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the employees ID?',
                            name: 'eID',
                        },
                        {
                            type: 'input',
                            message: 'What is the employees new Last Name?',
                            name: 'name',
                        }
                    ])
                          .then((firstName)=>{
                            var updateType = "employee"
                            var eID = firstName.eID 
                            var fName = firstName.name
                            db.query('UPDATE employees SET last_name = ? WHERE id = ?', [fName, eID], (err, results) => {
                                if (err) {
                                    console.log(err);
                                  }
                            console.log("Added!")
                            whatNextUpdate(updateType)   
                            })
                          })
                }
                else if (updateType == "Manager"){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the employees ID?',
                            name: 'eID',
                        },
                        {
                            type: 'input',
                            message: 'What is the employees new Manager?',
                            name: 'name',
                        }
                    ])
                          .then((firstName)=>{
                            var updateType = "employee"
                            var eID = firstName.eID 
                            var fName = firstName.name
                            db.query('UPDATE employees SET manager = ? WHERE id = ?', [fName, eID], (err, results) => {
                                if (err) {
                                    console.log(err);
                                  }
                            console.log("Added!")
                            whatNextUpdate(updateType)   
                            })
                          })
                }
                else if (updateType == "Role"){
                    inquirer
                    .prompt([
                        {
                            type: 'input',
                            message: 'What is the employees ID?',
                            name: 'eID',
                        },
                        {
                            type: 'input',
                            message: 'What is the employees new Role ID?',
                            name: 'name',
                        }
                    ])
                          .then((firstName)=>{
                            var updateType = "employee"
                            var eID = firstName.eID 
                            var fName = firstName.name
                            db.query('UPDATE employees SET role_id = ? WHERE id = ?', [fName, eID], (err, results) => {
                                if (err) {
                                    console.log(err);
                                  }
                            console.log("Added!")
                            whatNextUpdate(updateType)   
                            })
                          })
                }
            })
    }

    var exit = () => {
        console.log("Bye!")
    }

    var whatNext = (type) => {

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
                else if (userInput == "Add Another" && type == "department"){
                    addDepartment()
                }
                else if (userInput == "Add Another" && type == "role"){
                    addRole()
                }
                else if (userInput == "Add Another" && type == "employee"){
                    addEmployee()
                }
                else {
                    exit()
                }
            }) 
        }
    var whatNextUpdate = (type) => {

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
                if (userInput == "Main Menu") {
                    mainMenu()
                }
                else if (userInput == "Update Another" && type == "department"){
                    addDepartment()
                }
                else if (userInput == "Update Another" && type == "role"){
                    addRole()
                }
                else if (userInput == "Udpate Another" && type == "employee"){
                    addEmployee()
                }
                else {
                    exit()
                }
            }) 
    }    

  mainMenu()