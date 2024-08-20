import Applyjob from "../../PageObject_candidate/FindJob";
import 'cypress-xpath';

describe('Sucessfully Apply to job', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new Applyjob();
     C1.loginButton('em1@yopmail.com','12345678');

     cy.contains('span.jet-checkboxes-list__label', 'Full Time').click();
     cy.wait(1000);
     cy.log('Successfully Search Job using Vacancy Status');

  })
  })