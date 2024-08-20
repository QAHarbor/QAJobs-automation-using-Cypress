import MyProfile from "../../PageObject_candidate/MyAccountPage";
import 'cypress-xpath';
import 'cypress-file-upload';

describe('Update Profile picture with jpg file', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

    var l1 = new MyProfile();
    l1.MyAccount('em1@yopmail.com','12345678');

    cy.xpath('(//*[name()="circle"])[2]').click({ force: true });
    cy.xpath('//input[@id="_candidate_avatar"]').click();



    // cy.get('input.jet-form-builder__field.file-field.jet-form-builder-file-upload__input').click();
    cy.fixture('baby.jpg').then(fileContent => {
     cy.get('input.jet-form-builder__field.file-field.jet-form-builder-file-upload__input').attachFile({
        fileContent: fileContent,
        fileName: 'baby.jpg',
        mimeType: 'image/jpeg' // Adjust mime type according to your file type
      });
    });
 
    cy.get('input[name="_candidate-first-name"]').type('shanjida');


  });
});