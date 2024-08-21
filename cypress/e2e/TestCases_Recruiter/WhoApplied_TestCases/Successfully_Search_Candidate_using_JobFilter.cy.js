import WhoApplied from "../../PageObject_recruiter/WhoApplied";
import 'cypress-xpath';

describe('Successfully Search candidate using job filter', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var w1 = new WhoApplied();
      w1.Whoapplied('tec@yopmail.com','12345678');
      cy.wait(3000); 

cy.xpath('(//div[@class="jet-filter-items-dropdown__label"])[1]').click() 
cy.get('input.jet-filter-items-search__input').type('Test Engineer');
cy.wait(1000)
cy.xpath('(//i[@class="jet-checkboxes-list__checked-icon fa fa-check"])[1]').click();
cy.wait(2000)
cy.log('Successfully Search Candidate using job filter feature');
})
})