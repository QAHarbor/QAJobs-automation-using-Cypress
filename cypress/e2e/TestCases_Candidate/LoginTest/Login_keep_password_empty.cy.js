import LoginCandidate from "../../PageObject_candidate/LoginPage_can";


describe('Login keep password field empty', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new LoginCandidate();
     l1.loginButton('em1@yopmail.com',' ');
     cy.log('Login failed');
  })
  })