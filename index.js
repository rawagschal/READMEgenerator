const inquirer = require('inquirer');
const generateReadme = require('./src/page-template.js');
const writeToFile = require('./utils/generateMarkdown');



// array of questions for user
const questions = () => {
    return inquirer.prompt([
        //project title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: (titleInput) => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Your project needs a title!');
                    return false;
                }
            }
        },
        //description
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project:',
            validate: (descriptionInput) => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description.');
                    return false;
                }
            },   
        },
        //installation instructions
        {
            type: 'input',
            name: 'installation',
            message: 'Describe to others how to install your code',
            validate: (installationInput) => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You gotta help people install your code.');
                    return false;
                }
            },
        },
        //usage info
        {
            type: 'input',
            name: 'usage',
            message: 'Describe to others how to use your app',
            validate: (usageInput) => {
                if (usageInput) {
                    return true;
                } else {
                console.log ('Pls explain how to use your app.');
                return false;
               
                }
            },
        },
        //contribution guildelines
        {
            type: 'input',
            name: 'contribution',
            message: 'Let other developers know how to contribute to your app:',
            validate: (contributionInput) => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for contributions from other developers');
                    return false;
                }
            },
        },
        //test instructions
        {
            type: 'input',
            name: 'tests',
            message: 'Let other developers know how to test your application:',
            validate: (testInput) => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide instructions for developers to test your app.');
                    return false;
                }
            },
        },
        //license
        {
            type: 'list',
            name: 'license',
            message: 'Please select which license you would like to use for your app',
            choices: ['MIT', 'GPL', 'Apache'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false
                }
            },
        },
        //GH username
        {
            type: 'input',
            name: 'github',
            message: 'Please enter youru GitHub username:',
            validate: (githubInput) => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            },
        },
        //email
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }
        }

    ])
};


// initialize generator
questions()
    .then(answers => {
        console.log('answers:', answers)
        return generateReadme(answers);
    })
    .then(makeMarkdown => {
        return writeToFile(makeMarkdown)
    })
    .catch(err => {
        console.log(err);
    })