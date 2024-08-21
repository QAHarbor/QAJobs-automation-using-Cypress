import Registration from "../../PageObject_recruiter/recruiter_Registration";

describe('Register ', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/recruiter-reg-auto/')

      var R1 = new Registration();
      R1.Register('Techno Limited-23 ','info@yopmail.com ','01872345678','12345 ','12345678');

      cy.wait(2000)
      cy.log('Please increase password length');

      //cy.contains('span.jet-listing-dynamic-link__label', 'View Profile').click();

})
})