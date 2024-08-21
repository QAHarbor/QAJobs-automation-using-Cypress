import findjob from "../../PageObject_recruiter/FindJobPage";


describe('Sucessful Search Job using job title', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new findjob();
     l1.loginButton('tec@yopmail.com','12345678');

     cy.get('input.jet-search-filter__input[name="query"]').type('junior');
     cy.get('.apply-filters > .apply-filters__button').click();
     cy.wait(2000)

     cy.log('Successfully Search using job Title');


  })
  })
