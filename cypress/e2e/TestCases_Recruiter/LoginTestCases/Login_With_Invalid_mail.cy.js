import Login from '../../PageObject_recruiter/Loginpage';
import 'cypress-xpath';

describe('Input invalid mail and valid password', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Login();
   l1.loginButton('tec1@yopmail.com','12345678');

   cy.log('Failed to login');
})
})