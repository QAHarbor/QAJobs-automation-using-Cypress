
import findjob from "../../PageObject_recruiter/FindJobPage";


describe('Sucessfully Search job using vacancy type', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')
     var l1 = new findjob();
     l1.loginButton('tec@yopmail.com','12345678');

     cy.contains('span.jet-checkboxes-list__label', 'Full Time').click();
     cy.wait(1000);
     cy.log('Successfully Search Job using Vacancy Status');


  })
  })
