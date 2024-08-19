// cypress/support/commands.js
// Add a global error handler to prevent Cypress from failing tests on uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error message contains the identifier 'admin'
    if (err.message.includes('admin')) {
      // If the error is related to 'admin', ignore it and return false
      return false;
    }
    // If the error is not related to 'admin', let Cypress handle it
    return true;
  });