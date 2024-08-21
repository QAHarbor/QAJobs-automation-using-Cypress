import MyProfile from '../../PageObject_recruiter/ProfilePage';
import 'cypress-xpath';

describe('Update Company Info with valid data', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

   var l1 = new MyProfile();
   l1.MyAccount('tec@yopmail.com','12345678');

   cy.xpath('(//*[name()="circle"])[2]').click({ force: true });

cy.get('#_recruiter-company-site').clear().type('labsqajobs.qaharbor.com');
cy.get('#_recruiter-company-size').select('100-200');
cy.get('#_recruiter-company-industry').select('Telecommunication');

cy.get('#_recruiter-address').clear();
cy.get('#_recruiter-address').type('Khulna Bangladesh');
cy.get('#_recruiter-country').select('Bangladesh');
cy.xpath('(//button[@type="submit"][normalize-space()="Update"])[1]').click();
cy.wait(2000)


})
})
