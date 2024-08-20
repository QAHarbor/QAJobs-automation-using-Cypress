import LoginCandidate from "../../PageObject_candidate/LoginPage_can";


describe('Login with invalid mail', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new LoginCandidate();
     l1.loginButton('emp1@yopmail.com','12345678');
     cy.log('Login failed');
  })
  })