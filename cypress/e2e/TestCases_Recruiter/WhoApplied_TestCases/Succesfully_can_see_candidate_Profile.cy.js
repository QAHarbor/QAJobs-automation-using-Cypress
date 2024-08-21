import WhoApplied from "../../PageObject_recruiter/WhoApplied";
import 'cypress-xpath';

describe('Successfully Search candidate using job filter', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var w1 = new WhoApplied();
      w1.Whoapplied('tec@yopmail.com','12345678');
      cy.wait(3000); 
      cy.contains('span.jet-listing-dynamic-link__label', 'View Profile').click();

})
})


