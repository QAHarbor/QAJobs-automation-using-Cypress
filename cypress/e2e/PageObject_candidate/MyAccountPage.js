class MyProfile {
  
    MyAccount(email, pass) {
      cy.contains('Log In').click();
      cy.get('#email').type(email);
      cy.get('#password').type(pass);
      cy.get('.jet-form-builder__action-button').click();
  
     //To Remove Company photo
      // cy.xpath("//div[@id='overlay']//div[@class='elementor-widget-container']").click();
      // cy.xpath("//input[@id='_company-logo']").click();
      // cy.xpath("//div[@class='jet-form-builder-file-upload__file-remove']//*[name()='svg']").click();
      // cy.xpath("(//button[@type='submit'][normalize-space()='Update'])[4]").click();
      // To upload a new company photo

      }
  }
  export default MyProfile;