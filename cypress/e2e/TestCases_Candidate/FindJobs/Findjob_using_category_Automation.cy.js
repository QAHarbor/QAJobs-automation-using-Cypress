import Applyjob from "../../PageObject_candidate/FindJob";
import 'cypress-xpath';

describe('Sucessfully Apply to job', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new Applyjob();
     C1.loginButton('em1@yopmail.com','12345678');

     cy.get('select[name="vacancy-category"]').select('Automation Tester');
     cy.wait(2000)
     cy.log('Successfully Search using job Category');


  })
  })