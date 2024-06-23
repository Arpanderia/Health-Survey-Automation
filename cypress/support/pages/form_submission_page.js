class FormSubmissionPage {
    // Define the elements 
    elements = {
        inputName: ()=> cy.get('input[class="whsOnd zHQkBf"]'),
        selectYourAgeBy18: ()=> cy.get('#i12 > div.vd3tt > div'),
        clickOnExercise: ()=> cy.get('div[class="MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R"]'),
        selectExerciseDropdown: ()=> cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div[3]'),
        clickOnSubmit: ()=> cy.get('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div > span > span'),
        
    }

    // Operations/Methods we want to perform
    
    /**
     * Perform fill operation with the username
     * @param {string} userName -- The user name to be used for Health Survey
     */
    fill_inputName(userName){
        this.elements.inputName().type(userName)
    }

    /**
     * Perform to click the checBox for user age 18+
     */
    click_selectYourAgeBy18(){
        this.elements.selectYourAgeBy18().click()
    }

    /**
     * Perform click operation on 'Do you exercise every week?*' element
     */
    click_clickOnExercise(){
        this.elements.clickOnExercise().click()
    }

    /**
     * Select the dropdown value from 'Do you exercise every week?*' field 
     * @param {string} option -- The user name to be used for Health Survey
     */
    select_selectExerciseDropdown(option){
        this.elements.selectExerciseDropdown().should('contain', option).click()
    }

    /**
     * Perform click operation on submit button
     */
    click_clickOnsubmit(){
        this.elements.clickOnSubmit().click()
    }

}
export default new FormSubmissionPage;