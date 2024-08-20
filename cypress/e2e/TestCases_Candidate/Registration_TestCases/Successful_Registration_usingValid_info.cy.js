import Registration from "../../PageObject_candidate/Registration_candidate";
describe('Successfully Register as Candidate', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/candidate-reg-auto/')

      var R1 = new Registration();
      R1.Register('Orin','orin@yopmail.com','12345678','12345678');

      cy.log("Successfully Sign Up as candidate")

      //cy.contains('span.jet-listing-dynamic-link__label', 'View Profile').click();

})
})

