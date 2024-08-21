import WhoApplied from "../../PageObject_recruiter/WhoApplied";
import 'cypress-xpath';

describe('Successfully Search using Exeperience Sorting', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var w1 = new WhoApplied();
      w1.Whoapplied('tec@yopmail.com','12345678');
      cy.wait(3000); 
      cy.get('select.jet-sorting-select').select('Experience highest to lowest');
      cy.wait(1000)
      cy.scrollTo('bottom')
      cy.wait(1000)
      cy.get('[data-value="2"] > .jet-filters-pagination__link').click();
      cy.wait(1000)
      cy.reload();

      cy.get('select.jet-sorting-select').select('Experience lowest to highest');
      cy.wait(1000)
      cy.scrollTo('bottom')
      cy.wait(1000)
      cy.get('[data-value="2"] > .jet-filters-pagination__link').click();
      cy.wait(1000)
 
  })
  })