import MyProfile from "../../PageObject_candidate/MyAccountPage";
import 'cypress-xpath';


describe('Update Candidate Contact Info', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

    var l1 = new MyProfile();
    l1.MyAccount('em1@yopmail.com','12345678');

    cy.xpath('(//*[name()="path"])[8]').click();
    cy.get('#_candidate-email').clear().type('em1@yopmail.com');
    cy.get('input#_candidate_phone').clear().type('0198765432'); 
    cy.get('input#_candidate-portfolio-link').clear().type('https://qaharbor.com');
    cy.wait(1000)

    // Select the button using the XPath
cy.xpath('(//button[@type="submit"][normalize-space()="Update"])[2]').click({ force: true });

    cy.log('Successfully update contact info');
    
});
});