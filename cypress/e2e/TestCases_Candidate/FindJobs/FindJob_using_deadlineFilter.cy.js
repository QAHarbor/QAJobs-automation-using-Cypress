import Applyjob from "../../PageObject_candidate/FindJob";
import 'cypress-xpath';

describe('Sucessfully Apply to job', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new Applyjob();
     C1.loginButton('em1@yopmail.com','12345678');

     cy.get('input.jet-date-range__from').click()
     cy.get('a.ui-state-default.ui-state-highlight').click();
     
     cy.get('input.jet-date-range__to').click(); // Click to open the date picker
     cy.get('a.ui-state-default').contains('22').click();
     
     cy.get('button.jet-date-range__submit.apply-filters__button').click();
     cy.contains('button', 'Reset').click();
     cy.wait(2000)
     
     cy.log('Successfully Search using Deadline Filter');


  })
  })