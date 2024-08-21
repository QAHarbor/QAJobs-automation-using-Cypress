import MyProfile from '../../PageObject_recruiter/ProfilePage';
import 'cypress-xpath';

describe('Update About Section of MyAccount', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
  
      var l1 = new MyProfile();
      l1.MyAccount('tec@yopmail.com','12345678');

cy.xpath('(//*[name()="circle"])[4]').click({force: true});
cy.wait(1000);

//cy.get('textarea#_about-the-company').click({ multiple: true, force: true })
cy.get('textarea#_about-the-company').click({ multiple: true, force: true }).clear({ force: true })
  .wait(3000) // Wait for 3000 milliseconds
.type('labs QA Jobs for testing purpose', { force: true });
cy.wait(2000)
// cy.get('button.jet-form-builder__action-button.jet-form-builder__submit.submit-type-ajax').click({ multiple: true });
})
})