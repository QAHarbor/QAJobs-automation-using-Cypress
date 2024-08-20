import ChangePass_Candidate from "../../PageObject_candidate/ChangePassword";

describe('Sucessfully change password', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new ChangePass_Candidate();
     C1.Changepassword('em1@yopmail.com','12345678','12345678','87654321');
     cy.log('Change password failed');
  })
  })