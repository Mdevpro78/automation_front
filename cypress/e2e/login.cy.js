describe('Login Page', () => {
    const baseUrl = 'http://web/';
    const signUpUrl = 'signUp/signup.html';
    const loginUrl = 'login/login.html';
    const dashboardUrl = 'dashboard/dashboard.html';

    beforeEach(() => {
        // Clear the localStorage before each test
        localStorage.clear();
    });

    it('should login a user successfully', () => {
        // Add a user to localStorage
        const existingUser = {
            email: 'test@example.com',
            firstname: 'John',
            lastname: 'Doe',
            birthdate: '1990-01-01',
            phone: '1234567890',
            password: 'password123',
        };
        localStorage.setItem('users', JSON.stringify([existingUser]));

        cy.visit(`${baseUrl}${loginUrl}`);

        cy.get('#login-email').type('test@example.com');
        cy.get('#login-password').type('password123');
        cy.get('button[type="submit"]').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contain('Login successful!');
        });

        cy.wait(2000);
        cy.url().should('include', `${baseUrl}${dashboardUrl}`);
    });

    it('should display an error for invalid login', () => {
        cy.visit(`${baseUrl}${loginUrl}`);

        cy.get('#login-email').type('invaliduser@example.com');
        cy.get('#login-password').type('wrongpassword');
        cy.get('button[type="submit"]').click();

        cy.on('window:alert', (text) => {
            expect(text).to.contain('Login failed. Please check your email and password.');
        });

        cy.wait(2000);
        cy.url().should('not.include', `${baseUrl}${dashboardUrl}`);
    });
});