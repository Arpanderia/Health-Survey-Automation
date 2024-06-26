// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress")

//////////////////
/*
const { faker } = require('@faker-js/faker');
Cypress.Commands.add('generateRandomName', () => {
    return faker.name.fullName(); 
}) */

//Cypress custom command
Cypress.Commands.add('goToApplication', ()=>{
    //Retrieve the application url from Cypress environment variables
    const url =Cypress.env('application_URL')
    //Nevigate to the Application
    cy.visit(url)
})

