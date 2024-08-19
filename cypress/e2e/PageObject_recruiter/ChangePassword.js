class ChangePass
{
Changepassword(email,pass,NewPass,ConPass)
{
    cy.contains('Log In').click();
    cy.get('#email').type(email);
    cy.get('#password').type(pass);
    cy.get('.jet-form-builder__action-button').click();
    cy.window().scrollTo('bottom')
    cy.get('a[href="https://labsqajobs.qaharbor.com/account/change-password/"]').click();
    cy.get('#new_password').type(NewPass);
    cy.get('#confirm_password').type(ConPass);
    cy.xpath("//button[normalize-space()='Save Changes']").click();

}}
export default ChangePass