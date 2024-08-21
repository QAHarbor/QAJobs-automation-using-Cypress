import Login from '../../PageObject_recruiter/Loginpage';
import 'cypress-xpath';

describe('Input valid mail and invalid password', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Login();
   l1.loginButton('tec@yopmail.com','1234678');
  

   cy.log('Failed to login');
})
})