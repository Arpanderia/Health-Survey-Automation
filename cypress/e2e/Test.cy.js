describe ('testing', ()=>{
    beforeEach(()=>{

        //visit pre-defined
        cy.goToApplication()
    
      })
    it('first test', ()=>{
        //cy.get('input[class="whsOnd zHQkBf"]')

        //cy.get('div[id="i12"]')
        //.eq(1)
        //.click()
        cy.get('div[data-params*="Name"] input').type('ahda')
        cy.get('div[data-params*="18 or above"] [data-value="18 or above"]').click()
        //  .click()
        //cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div[3]')
        //  .contains('Yes').click()   jsaction*="click"   [data-value="Yes"]

        cy.get('div[data-params*="Do you exercise every week?"] [role="listbox"]').click()

        cy.get('div[class="OA0qNb ncFHed QXL7Te"]').find('div > span').contains('Yes').click()

        //cy.get('div[data-params*="Yes"] [data-value="Yes"]').contains('Yes').click({force: true})
        //cy.get('div[class="ThHDze"] [role="button"]').contains('Submit')

    })

})