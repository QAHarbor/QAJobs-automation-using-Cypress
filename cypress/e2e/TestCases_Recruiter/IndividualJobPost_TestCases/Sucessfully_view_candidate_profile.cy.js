import Individual_JobPost from "../../PageObject_recruiter/See_Applicant_Individual_JobPost";
import 'cypress-xpath';


describe('Sucessfully See Candidate profile', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Individual_JobPost();
   l1.Login('tec@yopmail.com','12345678');
   //Jod details display

   cy.scrollTo(0, 300)
   cy.xpath('(//span[@class="jet-listing-dynamic-link__label"])[4]').click();

   cy.xpath("(//span[@class='jet-listing-dynamic-link__label'][text()='View Profile'])[1]").click();
cy.wait(2000);
  
})
})