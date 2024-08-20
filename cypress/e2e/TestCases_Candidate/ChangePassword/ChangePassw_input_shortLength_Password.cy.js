import ChangePass_Candidate from "../../PageObject_candidate/ChangePassword";

describe('Change password using short length password', () => {
    it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')
     var C1 = new ChangePass_Candidate();
     C1.Changepassword('em1@yopmail.com','12345678','1234','1234');
     cy.log('Change password failed');
  })
  })