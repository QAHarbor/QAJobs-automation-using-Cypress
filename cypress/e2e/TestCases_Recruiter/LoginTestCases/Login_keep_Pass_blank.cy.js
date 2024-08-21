import Login from '../../PageObject_recruiter/Loginpage';
import 'cypress-xpath';

describe('Login keep pass field blank', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Login();
   l1.loginButton('tec1@yopmail.com',' ');
   cy.wait(2000)
   cy.log('Failed to login');
})
})