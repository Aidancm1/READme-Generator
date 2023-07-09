
 // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'mit':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case 'apache':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case 'isc':
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
      break;
    case '':
      return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'mit':
      return "https://opensource.org/license/mit/"
      break;
    case 'apache':
      return "https://www.apache.org/licenses/LICENSE-2.0"
      break;
    case 'isc':
      return "https://opensource.org/license/isc-license-txt/"
      break;
    case '':
      return ""
      break;
  }

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  # License


  ${renderLicenseBadge(license)},

  ${renderLicenseLink(license)},

  The license is ${license}
  
  
  
  `



}

  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  My name is Aidan ${data.motivation},  

  The title of this project is ${data.title},  

  My motivation for this project was ${data.motivation},  

  I wanted to build this project because ${data.why},  

  This project solves the problem of ${data.problem},  

  In the process of building this project I learned ${data.learn},  
  
  This project includes a ${data.license} license.
  ${renderLicenseSection(data.license)} 

  You can visit my Github profile at ${data.github}

  You can ask any questions or submit input directly at ${data.email}
  
`;
}
module.exports = generateMarkdown;
