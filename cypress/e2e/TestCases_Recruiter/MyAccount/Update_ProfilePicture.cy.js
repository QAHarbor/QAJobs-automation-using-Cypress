import MyProfile from '../../PageObject_recruiter/ProfilePage';
import 'cypress-xpath';
import 'cypress-file-upload';

describe('Update Profile picture with jpg file', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

    var l1 = new MyProfile();
    l1.MyAccount('tec@yopmail.com','12345678');

    cy.xpath("//div[@id='overlay']//div[@class='elementor-widget-container']").click();
    //cy.get('.elementor-heading-title').click();
  
    cy.get('#_company-logo').click();
    cy.fixture('del.jpg').then(fileContent => {
      cy.get('#_company-logo').attachFile({
        fileContent: fileContent,
        fileName: 'del.jpg',
        mimeType: 'image/jpeg' // Adjust mime type according to your file type
      });
    });
    cy.get('.jet-form-builder__action-button').click({ multiple: true, force: true });
    cy.wait(2000)
  
  });
});

