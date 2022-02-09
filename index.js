const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

function prompts (){
return inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'projTitle',
    },
    {
      type: 'input',
      message: 'Write a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please list installation instructions:',
      name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'What is the purpose of this project?',
        name: 'usageInstructions',
      },
      {
        type: 'list',
        message: 'Choose the license you are going to use:',
        name: 'license',
        choices: [ 'ISC','Mozilla', 'Apache',  'Open', 'GNU','MIT']
      },
      {
        type: 'input',
        message: 'List any contribution guidelines if available:',
        name: 'contributionInstructions',
      },
      {
        type: 'input',
        message: 'List the test intructions if it is available please:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter your github username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Please enter your email:',
        name: 'email',
      },
    ])}


async function init() {

    var answers = await prompts()
    console.log(answers)
    const generateREADME = generateMarkdown(answers);
    await writeFileAsync('./sample_readme/README.md', generateREADME);    

}

init();