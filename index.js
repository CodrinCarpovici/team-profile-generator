const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.
const team = []; // team members array

// First prompt to show up
const gatherTeamInfo = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Team Manager's Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Team Manager's Employee Id:",
      },
      {
        type: "input",
        name: "email",
        message: "Team Manager's work Email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Team Manager's Office Number:",
      },
    ])
    .then((managerInfo) => {
      const manager = new Manager(
        managerInfo.name,
        managerInfo.id,
        managerInfo.email,
        managerInfo.officeNumber
      );
      team.push(manager);

      // next prompt for the rest of the team
      menuForTeamMembers();
    })
    .catch((err) => console.error(err));
};

//Team members prompt menu
const menuForTeamMembers = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "Select the type of team member you want to add:",
        choices: ["Engineer", "Intern", "Finish building the team"],
      },
    ])
    .then((answer) => {
      if (answer.memberType === "Engineer") {
        engineerPrompt();
      } else if (answer.memberType === "Intern") {
        internPrompt();
      } else {
        generateHTML();
      }
    })
    .catch((err) => console.log(err));
};

// Function to get engineer details
const engineerPrompt = () => {
  inquirer
    .promp([
      {
        type: "input",
        name: "name",
        message: "Engineer's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Engineer's GitHub username:",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      team.push(engineer);

      menuForTeamMembers();
    })
    .catch((err) => console.log(err));
};

// Function to prompt user for intern details
const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name:",
      },
      {
        type: "input",
        name: "id",
        message: "Intern's employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Intern's school:",
      },
    ])
};
