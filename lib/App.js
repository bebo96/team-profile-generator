const inquirer = require('inquirer');

function App(){
    this.employee;
}

App.prototype.initializeApp = function () {

    return inquirer.prompt([{
        type: 'input',
        name: 'projectName',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name: ');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: 'Enter your current role: '
    },
    {
        type: 'input',
        name: 'idNumber',
        message: 'Enter your ID number: '
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address: '
    },
    {
        type: 'input',
        name: 'userName',
        message: 'Enter your github username: '
    }
]);

};

module.exports = App;