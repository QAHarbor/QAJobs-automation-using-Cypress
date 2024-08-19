class Applyjob
{
loginButton(email,pass)
{
cy.contains('Log In').click();
   cy.get('#email').type(email);
   cy.get('#password').type(pass);
   cy.get('.jet-form-builder__action-button').click();
   
   cy.contains( 'Find Job').click({force: true});

 

}}
export default Applyjob