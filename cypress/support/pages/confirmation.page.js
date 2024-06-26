class ConfirmationPage {
    // Define the elements 
    elements = {
        /**
         * Inspect the Heading of the page after form submission
         * @returns {Cypress.Chainable<JQuery<HTMLElement>>} A cypress chainable object containing the heading element.
         */
        heading: ()=> cy.get('div[class="pdLVYe LgNcQe"]')

    }



}

export default new ConfirmationPage;