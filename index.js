// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;


var licenseChoice = [
  "Apache v2", 
  "GNU GPLv3", 
  "MIT", 
]

// TODO: Create an array of questions for user input
const questions = [
{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository?',
},
{
  type: 'input',
  name: 'description',
  message: 'Add a description to your repository:',
},
{
  type: 'confirm',
  name: 'table of contents',
  message: 'Would you like a table of contents?',
},
{
  type: 'input',
  name: 'Table of Contents',
  message: '',
},
{
  type: 'input',
  name: 'installation',
  message: 'What are the steps required to install your project?',
},
{
  type: 'input',
  name: 'usage',
  message: 'Provide instructions and examples for use. Include screenshots as needed.',
},
{
  type: 'list',
  name: 'license',
  message: 'What license would you like to choose?',
  choices: licenseChoice,
},
{
  type: 'input',
  name: 'contributing',
  message: 'Enter your LinkedIn URL.',
},
{
  type: 'input',
  name: 'tests',
  message: 'Enter your LinkedIn URL.',
},
{
  type: 'input',
  name: 'questions',
  message: 'Enter your LinkedIn URL.',
}];

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated 
// with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README 
// entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README 
// and a notice is added to the section of the README entitled License 
// that explains which license the application is covered under


//--------------Questions section---------
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, 
// with instructions on how to reach me with additional questions

//-------------Table of Contents----------
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Create a function to write README file
const generateREADME = ({title, description, installation, usage, license}) => 
`# ${title}

## Description

${description}

## Table of Contents

- [](#)
- [](#)
- [](#)
- [](#)

## Installation

${installation}

## Usage

${usage}

## Credits



## License

${license}

## How to Contribute



## Tests



`;

const promptUser = () => {
return inquirer.prompt(questions);
}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('readme.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
