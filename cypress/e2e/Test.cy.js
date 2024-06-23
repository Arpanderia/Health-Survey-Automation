describe ('testing', ()=>{
    beforeEach(()=>{

        //visit pre-defined
        cy.goToApplication()
    
      })
    it('first test', ()=>{
        cy.get('div[class="AB7Lab Id5V1"]').eq(1).click()

        cy.get('div[class="MocG8c HZ3kWc mhLiyf LMgvRb KKjvXb DEh1R"]')
          .click()
        cy.xpath('//*[@id="mG61Hd"]/div[2]/div/div[2]/div[3]/div/div/div[2]/div/div[2]/div[3]')
          .contains('Yes').click()

    })

})