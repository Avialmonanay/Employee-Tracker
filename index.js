const mysql = require('mysql2')
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
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
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Departmnet", "Add A Roll", "Add An Employee","Update An Employee's Role" ],
    }
  ])
  .then((menuChoice) => {
    console.log (menuChoice)

  })
  }