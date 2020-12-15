const generateDescription = (description) => {
    if (!description) {
        return '';
    }
    return `
## Description

${description}`
};

// license w/ badge
const generateLicense = (license) => {
    if (!license) {
        return '';
    }
    return `
    ## License
    
    [![license badge]]https://img.shields.io/static/v1?label=license&message=${license}&color=important)](https://opensource.org/licenses/${license})`
};

function generateMarkdown(data) {
    console.log('markdown:', data);
    return `# ${data.title}
${generateDescription(data.description)}

## Table of Contents

* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributions](#contributions)
* [Tests](#tests)

${generateLicense(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Contributions

${data.contribution}

## Tests

${data.tests}

## Contact

Questions, comments, or conerns? Find me on [GitHub](https://github.com/${data.github}/) or [send me an email](mailto:${data.email}).`;
};

module.exports = generateMarkdown;