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
        
    ])
}

    



    //contribution guildelines

    //test instructions

    //license

    //GH username

    //email




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