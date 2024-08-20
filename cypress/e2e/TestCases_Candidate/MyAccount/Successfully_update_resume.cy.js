import MyProfile from "../../PageObject_candidate/MyAccountPage";
import 'cypress-xpath';
import 'cypress-file-upload';


describe('Update Candidate Resume', () => {
  it('passes', () => {
    cy.visit('https://labsqajobs.qaharbor.com/')

    var l1 = new MyProfile();
    l1.MyAccount('em1@yopmail.com','12345678');
    cy.wait(1000)

    cy.xpath('(//*[name()="circle"])[8]').click({ force: true });
   // Specify the file path of the PDF file
const filePath = 'C:/Users/Dell/Desktop/QAJobs_Automation/cypress/fixtures/CV_1.pdf';

// Locate the input element by its ID and attach the PDF file
cy.get('#_resume').attachFile(filePath);


    // const filePath = 'C:\\Users\\Dell\\Downloads\\CV_1.pdf';
    // // Locate the first input element with id "_resume" and attach the PDF file
    // cy.xpath('(//input[@id="_resume"])[1]').attachFile({
    //   filePath: filePath,
    //   encoding: 'base64', // Specify the encoding if needed, typically 'base64' for binary files like PDFs
    //   mimeType: 'application/pdf' // Specify the MIME type if needed
    // });
  

    cy.log('Successfully upload Resume');
    
});
});