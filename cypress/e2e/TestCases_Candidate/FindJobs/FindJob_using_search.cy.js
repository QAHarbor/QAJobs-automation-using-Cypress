import Applyjob from "../../PageObject_candidate/FindJob";
import 'cypress-xpath';

describe('Sucessfully Apply to job', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new Applyjob();
     C1.loginButton('em1@yopmail.com','12345678');

     cy.get('input.jet-search-filter__input[name="query"]').type('job post check exp');
     cy.get('.apply-filters > .apply-filters__button').click();
     cy.wait(2000)

     cy.log('Successfully Search using job Title');


  })
  })