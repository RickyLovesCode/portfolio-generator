const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
const Choices = require('inquirer/lib/objects/choices');
const Prompt = require('inquirer/lib/prompts/base');
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//FUNCTION FOR 'NAME,MESSGE' QUESTIONS
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?(REQUIRED)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username(REQUIRED)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Enter your github account!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'would you like to create a aboue me?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};


const promptProject = portfolioData => {

  console.log(`
=================
Add a New Project
=================
`);

  // IF THERE'S NO PROJECTS, CREATE ONE
  if (!portfolioData.projects) {
    portfolioData.projects = []
  }

  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?(REQUIRED)',
      validate: projectName => {
        if (projectName) {
          return true;
        } else {
          console.log('Enter your project Name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: projectDescription => {
        if (projectDescription) {
          return true;
        } else {
          console.log('Provide a description');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: githubLink => {
        if (githubLink) {
          return true;
        } else {
          console.log('Enter your github link!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }

  ])
};

// const pageHTML = generatePage(mockData);

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });



