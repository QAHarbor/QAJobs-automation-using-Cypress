import Individual_JobPost from "../../PageObject_recruiter/See_Applicant_Individual_JobPost";
import 'cypress-xpath';


describe('Sucessfully Search candidate using sorting Feature', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Individual_JobPost();
   l1.Login('tec@yopmail.com','12345678');
   //Jod details display

   cy.scrollTo(0, 300)
   cy.xpath('(//span[@class="jet-listing-dynamic-link__label"])[4]').click();
  
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

