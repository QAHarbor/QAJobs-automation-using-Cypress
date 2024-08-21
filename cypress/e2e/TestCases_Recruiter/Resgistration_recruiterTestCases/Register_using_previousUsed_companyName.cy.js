import Registration from "../../PageObject_recruiter/recruiter_Registration";

describe('Register with used company and email address', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/recruiter-reg-auto/')

      var R1 = new Registration();
      R1.Register('Techno limited','qa@yopmail.com','01872345678','12345678','12345678');

      //cy.contains('span.jet-listing-dynamic-link__label', 'View Profile').click();

      cy.wait(2000)
      cy.log('Company Name and email should be unique');

})
})

