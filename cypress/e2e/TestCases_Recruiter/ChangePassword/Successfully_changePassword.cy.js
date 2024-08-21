
import ChangePass from '../../PageObject_recruiter/ChangePassword';

describe('Sucessfully change password', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new ChangePass();
     C1.Changepassword('tec@yopmail.com','12345678','12345678','12345678');
     cy.wait(2000)
     cy.log('Successfully Changed password');
  })
  })