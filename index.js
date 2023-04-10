// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated 
// with the title of my project and sections entitled 
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your Repository?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'License',
      message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateREADME(answers);

    fs.writeFile('readme.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// TODO: Create a function to write README file
const generateREADME = (fileName, data) => 
`# <Your-Project-Title>

## Description



## Table of Contents (Optional)

- [](#)
- [](#)
- [](#)
- [](#)

## Installation



## Usage



## Credits



## License



## How to Contribute



## Tests



`;

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
