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

const menuForTeamMembers = () => {
    
}