class Registration
{
Register(Username,email,password,ConPassword)
{
   
    cy.get('#username').type(Username)
    cy.get('#email').type(email)
   
    cy.get('#password').type(password)
    cy.get('#conf-pass').type(ConPassword)

    cy.get('.jet-form-builder__action-button').click();
    
    //cy.get('.jet-form-builder__submit').click();
}}
export default Registration
