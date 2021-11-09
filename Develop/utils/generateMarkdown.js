// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;

  switch (license) {
    case "GNU":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "Mozilla":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT":
      badge = { name: "MIT", color: "brightgreen" };
      break;
  }
  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let url;

  switch (license) {
    case "GNU":
      url = "agpl-3.0";
      break;
    case "Mozilla":
      url = "mpl-2.0";
      break;
    case "Apache":
      url = "apache-2.0";
      break;
    case "MIT":
      url = "mit";
      break;
    case "ISC":
      url = "isc";
      break;
  }
  return `https://choosealicense.com/licenses/${url}/`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseUrl = renderLicenseLink(data.license);
  return `##${data.title}

![License](${licenseBadge}

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

![Final Output] <b>to be added manually</b>

[a link] <b>to be added manually </b>

## Tests
${data.test} 


## Credits

${data.collaborators}

## License
${data.license} ${licenseUrl}


## Questions?
Vist my github page a github.com/${data.username} or email me at ${data.email}`;
}

module.exports = generateMarkdown;
