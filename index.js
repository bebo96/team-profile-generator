const inquirer = require('inquirer');
const writeFile = require('./src/writeToFile');
const htmlPage = require('./src/htmlPage');

//Created classes for each type of employee that will be pulled from lib directory
const { Intern, internQuestionsArr } = require('./lib/Intern');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Manager, managerQuestionsArr } = require('./lib/Manager');

//Object array for all employee members to be used for rendering 
const employeesArr = []

const init = () => { managerQuestions() }
//Get Manager answers using inquirer and creates object based on input
const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}
//Get Engineer answers using inquirer and creates object based on input
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}
//Get Intern answers using inquirer and creates object based on input
const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeesArr.push(answers);
        return employeePrompt();
    })
}
//Prompt handler to check what type of employee
const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        //If employee type is engineer, then ask engineer questions, if intern, then ask intern
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {
            //Render the HTML 
            let html = htmlPage(employeesArr)
            console.log('...');
            //Write to HTML file and using writeFile class and store in dist directory
            writeFile(html);
        }
    })
}

init();