class Registration
{
Register(companyName,workingMail,phoneNumber,password,ConPassword)
{


    cy.get('#_recruiter-company-name').type(companyName)
    cy.get('#_recruiter-email').type(workingMail)
    cy.get('input[name="phone"]').type(phoneNumber)
    cy.get('input[name="pass"]').type(password)
    cy.get('input[name="conf-pass"]').type(ConPassword)

    cy.contains('button', 'Register Now').click();
    //cy.get('.jet-form-builder__submit').click();
}}
export default Registration



