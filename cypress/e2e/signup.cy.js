describe('Sign Up Page', () => {
  const baseUrl = 'http://web/';
  const signUpUrl = 'signUp/signup.html';
  const loginUrl = 'login/login.html';

  beforeEach(() => {
    cy.clearLocalStorage();
  });

  it('should sign up a new user successfully', () => {
    cy.visit(`${baseUrl}${signUpUrl}`);

    cy.get('#email').type('test@example.com');
    cy.get('#firstname').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('1234567890');
    cy.get('#password').type('password123');
    cy.get('#password-confirm').type('password123');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contain('Sign up successful!');
    });

    cy.wait(2000);
    cy.url().should('include', `${baseUrl}${loginUrl}`);
  });

  it('should display an error when passwords do not match', () => {
    cy.visit(`${baseUrl}${signUpUrl}`);

    cy.get('#email').type('test@example.com');
    cy.get('#firstname').type('John');
    cy.get('#lastname').type('Doe');
    cy.get('#birthdate').type('1990-01-01');
    cy.get('#phone').type('1234567890');
    cy.get('#password').type('password123');
    cy.get('#password-confirm').type('differentpassword');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contain('Passwords do not match!');
    });

    cy.wait(2000);
    cy.url().should('not.include', `${baseUrl}${loginUrl}`);
  });
});