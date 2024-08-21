import ChangePass from '../../PageObject_recruiter/ChangePassword';
import 'cypress-xpath';

describe('Change Password keep new Password field blank', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new ChangePass();
     C1.Changepassword('tec@yopmail.com','12345678', '234567890 ', '12345678');
     cy.wait(2000)
     cy.log('Change password failed');
    })
  })