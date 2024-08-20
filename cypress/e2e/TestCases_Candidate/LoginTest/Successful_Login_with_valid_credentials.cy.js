import LoginCandidate from "../../PageObject_candidate/LoginPage_can";


describe('Sucessful Login with valid credentials', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new LoginCandidate();
     l1.loginButton('em1@yopmail.com','12345678');
     cy.log('Successfully Loged In');
  })
  })