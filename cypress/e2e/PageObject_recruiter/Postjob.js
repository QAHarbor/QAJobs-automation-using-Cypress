
class PostJob {
    postAJob(email, pass) {
        cy.contains('Log In').click();
        cy.get('#email').type(email);
        cy.get('#password').type(pass);
        cy.get('.jet-form-builder__action-button').click();

        cy.contains('.jet-profile-menu__item-link', 'Post a Job').click();

    }
}

export default PostJob;
