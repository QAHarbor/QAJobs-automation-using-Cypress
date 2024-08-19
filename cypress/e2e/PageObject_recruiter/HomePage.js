class HomePage
{
loginButton(email,pass)
{
cy.contains('Log In').click();
   cy.get('#email').type(email);
   cy.get('#password').type(pass);
   cy.get('.jet-form-builder__action-button').click();

   cy.get('a.jet-breadcrumbs__item-link.is-home').click();//go to home
  


}}
export default HomePage