class FormSubmissionPage {
    // Define the elements 
    elements = {
        name: ()=> cy.get('div[data-params*="Name"] input'),
        yourAgeBy18: ()=> cy.get('div[data-params*="18 or above"] [data-value="18 or above"]'),
        onExercise: ()=> cy.get('div[data-params*="Do you exercise every week?"] [role="listbox"]'),
        exerciseDropdown: ()=> cy.get('div[class="OA0qNb ncFHed QXL7Te"]').find('div > span'),
        submit: ()=> cy.get('div[class="ThHDze"] [role="button"]').contains('Submit'),

        
    }

    // Operations/Methods we want to perform
    
    /**
     * Perform fill operation with the username
     * @param {string} userName -- The user name to be used for Health Survey
     */
    inputName(userName){
        this.elements.name().type(userName)
    }

    /**
     * Perform to click the checBox for user age 18+
     */
    selectYourAgeBy18(){
        this.elements.yourAgeBy18().click()
    }

    /**
     * Perform click operation on 'Do you exercise every week?*' element
     */
    clickOnExercise(){
        this.elements.onExercise().click()
    }

    /**
     * Select the dropdown value from 'Do you exercise every week?*' field 
     * @param {string} option -- The user name to be used for Health Survey
     */
    selectExerciseDropdown(option){
        this.elements.exerciseDropdown().contains(option).click()
    }

    /**
     * Perform click operation on submit button
     */
    clickOnsubmit(){
        this.elements.submit().click()
    }

}
export default new FormSubmissionPage;