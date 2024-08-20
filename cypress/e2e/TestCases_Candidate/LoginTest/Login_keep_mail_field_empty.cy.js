import LoginCandidate from "../../PageObject_candidate/LoginPage_can";


describe('Login keep mail field empty', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new LoginCandidate();
     l1.loginButton(' ','12345678');
     cy.log('Login failed');
  })
  })