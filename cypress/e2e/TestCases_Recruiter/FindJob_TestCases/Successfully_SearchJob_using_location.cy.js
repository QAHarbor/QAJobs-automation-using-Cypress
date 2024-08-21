import findjob from "../../PageObject_recruiter/FindJobPage";


describe('Sucessful Search Job using Location', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new findjob();
     l1.loginButton('tec@yopmail.com','12345678');
     cy.wait(1000);
     
     cy.get('select[name="vacancy-country"]').select('Bangladesh', {force: true});


    
     //cy.get('.jet-select__control').select('Bangladesh');
     cy.get('.apply-filters > .apply-filters__button').click();
     
     cy.log('Successfully Search using job location');

})
})









