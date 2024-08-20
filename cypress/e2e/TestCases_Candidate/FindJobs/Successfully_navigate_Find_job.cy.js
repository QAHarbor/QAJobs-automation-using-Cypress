import Applyjob from "../../PageObject_candidate/FindJob";
import 'cypress-xpath';

describe('Sucessfully Navigate to Find job', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new Applyjob();
     C1.loginButton('em1@yopmail.com','12345678');

     cy.log('Successfully find all jobs');



  })
  })