
import FormSubmissionPage from '../../support/pages/form_submission.page'
import ConfirmationPage from '../../support/pages/confirmation.page'
import { faker } from '@faker-js/faker'
const randomName = faker.name.fullName()

describe('Health Survey form submission', () => {
  //const FormSubmissionPage = new FormSubmissionPage1()
  //Execute before each test cases 
  beforeEach(()=>{

    //visit pre-defined
    cy.goToApplication()

  })

  // Health survey form submission test cases 
    it('@regression @sanity Form submission with valid credentials. Validate the user is able to submit the form', () => {
      cy.fixture('testdata').then( (data)=>{

        data.username = randomName

        FormSubmissionPage.inputName(randomName)
        FormSubmissionPage.selectYourAgeBy18()
        FormSubmissionPage.clickOnExercise()
        FormSubmissionPage.selectExerciseDropdown(data.exerciseDropdown)
        FormSubmissionPage.clickOnsubmit()
        ConfirmationPage.elements.heading(data.confirmationHeading)
  
        // Validate the page URL after click on Submit button.
        cy.url().should('include',data.pageurl)

      })

      cy.screenshot()
    })

  })