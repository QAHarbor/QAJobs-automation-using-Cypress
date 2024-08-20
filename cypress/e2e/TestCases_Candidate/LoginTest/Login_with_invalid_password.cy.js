import LoginCandidate from "../../PageObject_candidate/LoginPage_can";


describe('Login with invalid password', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new LoginCandidate();
     l1.loginButton('em1@yopmail.com','123456789');
     cy.log('Login failed');
  })
  })