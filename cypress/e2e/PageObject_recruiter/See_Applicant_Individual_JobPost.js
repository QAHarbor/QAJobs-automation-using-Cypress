import 'cypress-file-upload';

class Individual_JobPost {
  Login(email, pass) {
    cy.contains('Log In').click();
    cy.get('#email').type(email);
    cy.get('#password').type(pass);
    cy.get('.jet-form-builder__action-button').click()
    
     
    }
}
export default Individual_JobPost;
