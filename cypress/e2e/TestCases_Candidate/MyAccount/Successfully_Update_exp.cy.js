import MyProfile from "../../PageObject_candidate/MyAccountPage";
import 'cypress-xpath';


describe('Update Candidate Experience', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

    var l1 = new MyProfile();
    l1.MyAccount('em1@yopmail.com','12345678');
    cy.scrollTo(0, 500);
    cy.wait(1000)

    cy.xpath('(//*[name()="circle"])[4]').click({ force: true });
    cy.get('#_candidate-experience').clear().type('1.5'); 
    cy.contains('button', 'Save').click();
    cy.log('Successfully update experience');






});
});