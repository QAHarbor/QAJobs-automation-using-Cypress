import HomePage from "../../PageObject_recruiter/HomePage";


describe('Sucessful Login with valid credentials', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new HomePage();
   l1.loginButton('tec@yopmail.com','12345678');
   
   //Jod details display
   cy.contains('span.jet-listing-dynamic-link__label', 'new post job for python engineer').click();
   cy.wait(2000)
})
})