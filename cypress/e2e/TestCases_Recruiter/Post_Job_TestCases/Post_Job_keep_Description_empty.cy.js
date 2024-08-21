import PostJob from '../../PageObject_recruiter/Postjob';
import 'cypress-xpath';

describe('Post A Job keep Description field empty', () => {
    it('passes', () => {
      cy.visit('https://labsqajobs.qaharbor.com/')

      var p2 = new PostJob();
      p2.postAJob('tec@yopmail.com','12345678');

      cy.get('#job-title').type('Junior SQA Engineer L-3') //Fill up title

      cy.xpath("(//span[normalize-space()='Negotiable'])[1]").click();
      cy.xpath("(//span[normalize-space()='On Site'])[1]").click();

     cy.xpath("(//span[@id='select2-_vacancy-country-container'])[1]").click();
// Select "Bangladesh" from the dropdown
cy.xpath("//li[text()='Bangladesh']").click();
cy.get('#_job-city').type('Dhaka');

// for Time zone
cy.xpath("(//span[@id='select2-_job-time-zone-container'])[1]").click();

// Select "UTC-11" from the dropdown
cy.xpath("//li[text()='UTC-11']").click();
cy.xpath("//span[normalize-space()='Full Time']").click();
cy.xpath("(//input[@id='_job-vacancy'])[1]").type('10');
cy.xpath("//span[normalize-space()='Automation Tester']").click();

// Set the value of the input field directly
cy.get('#_job-application-deadline').type('2024-05-10');
cy.wait(1000)
cy.xpath('//span[normalize-space()="No"]').click();
cy.xpath("(//button[normalize-space()='Post Now'])[1]").click({ force: true });
cy.wait(1000)

cy.log('Job is not published "Write details of this job"');
  })
  })