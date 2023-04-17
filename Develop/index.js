const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Unlicense']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide guidelines for contributing to your project:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for testing your project:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

function writeToFile(fileName, data) {
  const outputDir = './output';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  const outputPath = path.join(outputDir, fileName);
  fs.writeFile(outputPath, data, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`File ${fileName} has been written to the output directory!`);
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      const fileName = data.title.toLowerCase().split(' ').join('-') + '.md';
      writeToFile(fileName, markdown);
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
