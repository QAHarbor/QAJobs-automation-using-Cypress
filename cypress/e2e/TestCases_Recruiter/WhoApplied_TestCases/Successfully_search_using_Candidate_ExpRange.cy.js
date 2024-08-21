import WhoApplied from "../../PageObject_recruiter/WhoApplied";

describe('Successfully Search using experience range', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var w1 = new WhoApplied();
      w1.Whoapplied('tec@yopmail.com','12345678');
      cy.get('input.jet-range__inputs__min').clear().type('2{enter}');
      cy.wait(4000);
      cy.get('input.jet-range__inputs__max').clear().type('10{enter}');
      cy.wait(4000);
      cy.log('Successfully Search Candidate using Experience');
  
  })
  })