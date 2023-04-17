function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Unlicense') {
    return 'http://unlicense.org/';
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.
`;
  } else {
    return '';
  }
}


function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact [${data.github}](https://github.com/${data.github}) directly at ${data.email}.
`;
}

module.exports = generateMarkdown;
