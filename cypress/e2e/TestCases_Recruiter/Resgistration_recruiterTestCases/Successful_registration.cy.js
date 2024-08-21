import Registration from "../../PageObject_recruiter/recruiter_Registration";

describe('Successfully Register as Recruiter', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/recruiter-reg-auto/')

      var R1 = new Registration();
      R1.Register('Techno limited','qa@yopmail.com','01872345678','12345678','12345678');

      cy.log("Successfully Registered as Recruiter")

      //cy.contains('span.jet-listing-dynamic-link__label', 'View Profile').click();

})
})


