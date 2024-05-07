describe("Dashboard", () => {
    const baseUrl = "http://web/";
    const dashboardUrl = "dashboard/dashboard.html";
    const loginUrl = "login/login.html";

    const userFixture = {
        email: "test@example.com",
        firstname: "John",
        lastname: "Doe",
        password: "password123",
    };

    beforeEach(() => {
        cy.visit(`${baseUrl}${dashboardUrl}`);
        cy.clearLocalStorage();
    });


    it("should redirect to login page if user is not logged in", () => {

        // Reload the page
        cy.reload();

        // Assert that the user is redirected to the login page
        cy.url().should('include', `${baseUrl}${loginUrl}`);
    });

    it("should redirect to login page if user is not found", () => {
        localStorage.setItem('users', JSON.stringify(userFixture));
        localStorage.setItem('loggedInUser', 'Wrongtest@example.com');


        cy.on('window:alert', (text) => {
            expect(text).to.contain('here');
        });

        // Assert that the user is redirected to the login page
        cy.url().should('include', `${baseUrl}${loginUrl}`);
    });

    it("should display user name and current date and time", () => {
        localStorage.setItem("users", JSON.stringify([userFixture]));
        localStorage.setItem("loggedInUser", userFixture.email);

        cy.reload();

        cy.get("#user-name").should("have.text", userFixture.firstname);
        cy.get("#current-time").should("not.be.empty");
    });

    it("should sign out the user and redirect to login page", () => {
        localStorage.setItem("users", JSON.stringify([userFixture]));
        localStorage.setItem("loggedInUser", userFixture.email);

        cy.reload();

        // Click the sign out button
        cy.get("#sign-out-button").click().then(() => {
            // Assert that the loggedInUser is removed from local storage
            expect(localStorage.getItem('loggedInUser')).to.be.null;
        });

        cy.reload();
        cy.url().should("include", `${baseUrl}${loginUrl}`);
    });
});