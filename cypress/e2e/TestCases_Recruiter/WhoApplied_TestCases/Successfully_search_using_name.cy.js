import WhoApplied from "../../PageObject_recruiter/WhoApplied";
import 'cypress-xpath';

describe('Successfully Search using name', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var w1 = new WhoApplied();
      w1.Whoapplied('tec@yopmail.com','12345678');
      cy.wait(3000); 
cy.xpath('(//input[@name="_candidate_fname"])[2]').type('ela');
cy.wait(2000);
cy.xpath('(//input[@name="_candidate_fname"])[2]').clear();
cy.wait(2000)
cy.log('Successfully Search Candidate using their name');
 
  })
  })