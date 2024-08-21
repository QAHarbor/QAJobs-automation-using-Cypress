
import findjob from "../../PageObject_recruiter/FindJobPage";


describe('Sucessful Search Job Category', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new findjob();
     l1.loginButton('tec@yopmail.com','12345678');

     cy.get('select[name="vacancy-category"]').select('Manual Tester');
     cy.wait(2000)
   cy.log('Successfully Search using job Category');
})
})





