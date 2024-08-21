import Login from '../../PageObject_recruiter/Loginpage';


describe('Sucessful Login with valid credentials', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
   var l1 = new Login();
   l1.loginButton('tec@yopmail.com','12345678');
   cy.wait(2000)
   cy.log('Successfully logged in');
})
})