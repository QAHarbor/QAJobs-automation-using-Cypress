class findjob
{
loginButton(email,pass)
{
cy.contains('Log In').click();
   cy.get('#email').type(email);
   cy.get('#password').type(pass);
   cy.get('.jet-form-builder__action-button').click();

   cy.contains('Jobs').click();


}}
export default findjob