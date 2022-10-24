# Employee Tracker        
This is a terminal based application that uses prepared statements to pull, update, or add information to a database. This application uses 3 tables to hold information for Employees, Roles, and Departments. This is application was built to quickly access and query a database for the end user.


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Features](#features)
- [Contact](#questions)



## Installation
This application has 4 npm package dependencies - console.table, dotenv, inquirer, and mysql2. All dependencies have been added to the package.json file and can be installed by running the command "npm -i". there is a demo of the install in the video linked on this readme below. 

## Usage
A user will access the application by running the command "node index.js" once the application has started the user will be imediately prompted to select an option to view a table, update a table, or add to a table. Upon user selection of a view table option a formatted table is returned to the terminal displaying all information from the table. upon selecting a update or add option a new prompt will appear on screen requesting specific information related to the action they are attempting to make. Upon completion ot user input in the add or update actions the users will be prompted to add or update another, return to the main menu, or exit. This allows users to quickly make multiple updates or return to the main menu to continue taking actions within the application.
![Capture](https://user-images.githubusercontent.com/108016215/197650322-ebf3e98d-e248-4258-a1b3-f40253418c26.PNG)

## Video Demo


## Contribution
If you have suggestions or ideas for this application please reach out to the developer (contact information below)


## Features
The application uses the npm package console.table to return formatted tables to the user. The dotenv package is used to securly store users credentials to the database, the inquirer package is used to prompt users with questions and take the appropriate action based on input. mysql2 is used to connect the index.js file to sql.

## Questions
Github Username:Avialmonanay
 
If you have any additional questions please email me at rexxmadsen@gmail.com


