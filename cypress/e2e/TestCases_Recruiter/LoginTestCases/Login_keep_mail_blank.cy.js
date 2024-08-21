import Login from '../../PageObject_recruiter/Loginpage';
import 'cypress-xpath';

describe('Login keep mail field blank', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Login();
   l1.loginButton(' ','12345678');
   cy.wait(2000)
   cy.log('Failed to login');
})
})