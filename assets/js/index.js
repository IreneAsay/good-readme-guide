const inquirer = require("inquirer");

const fs = require("fs");

const readMeTemplate = (response) => {
    if (response.license === "Apache 2.0") {
        license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    if (response.license === "BSD 3") {
        license =
            "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    }
    if (response.license === "GNU GPL v3") {
        license =
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
    if (response.license === "MIT") {
        license =
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    const readMe = `
# ${response.title} ${license}


## Description 

${response.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation

${response.installation}


## Usage

${response.usage}


## License

The content of this application is licensed under the ${response.license} license.


## Contributing

${response.contributing}


## Tests

${response.tests}


## Questions

If you are interested in my application and want to learn more about it, please connect with me on Github or email me. 

Github: <a href="https://github.com/${response.username}" target="_blank">${response.username}</a> 

Email Address: ${response.email}

    `;
    return readMe;
};

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Provide a description of your project:",
            name: "description",
        },

        {
            type: "input",
            message: "Provide installation information for your users:",
            name: "installation",
        },

        {
            type: "input",
            message: "Provide some examples of the application usage:",
            name: "usage",
        },

        {
            type: "list",
            message: "Choose an applicable license for your project:",
            name: "license",
            choices: ["Apache 2.0", "BSD 3", "GNU GPL v3", "MIT"],
        },

        {
            type: "input",
            message: "How can other developers contribute to your project?",
            name: "contributing",
        },

        {
            type: "input",
            message: "Provide any tests written for your application, if applicable:",
            name: "tests",
        },

        {
            type: "input",
            message: "Provide some examples of the application usage:",
            name: "usage",
        },

        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
        },

        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then((response) => {
        fs.writeFile(
            "NewREADME.md",
            readMeTemplate(response),
            "utf-8",
            (err) => {
                err ? console.log(err) : console.log("success");
            }
        );
    });
