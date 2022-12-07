describe('Given the user is on the employee list page"', () => {
  describe("When the user wants to search an employee", () => {
    it("Then the user should be see a search bar", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");

      cy.get('[data-testid="searchBar"]').should("be.visible");
    });

    it("Then the user should be able to type a first name and see the result", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");

      cy.get("tbody > tr")
        .should("be.visible")
        .and("have.length.greaterThan", 1);

      cy.get('[data-testid="searchBar"]').should("be.visible");
      cy.get('[data-testid="searchBar"]').click().type("Grace");

      cy.get("tbody > tr").should("be.visible").and("have.length", 1);
    });

    it("Then the user should be able to delete their search and see all employees", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");

      cy.get("tbody > tr")
        .should("be.visible")
        .and("have.length.greaterThan", 1);

      cy.get('[data-testid="searchBar"]').should("be.visible");
      cy.get('[data-testid="searchBar"]').click().type("Grace");
      cy.get("tbody > tr").should("be.visible").and("have.length", 1);

      cy.get('[data-testid="searchBar"]').click().clear();

      cy.get("tbody > tr")
        .should("be.visible")
        .and("have.length.greaterThan", 1);
    });
  });

  describe("When the user wants to see more employees", () => {
    it("Then the user should see a button to choose the line number", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");

      cy.get('[data-testid="number-show"]').should("be.visible");
    });

    it("Then the user should be able to type a first name and see the result", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");
      cy.get("tbody > tr").should("be.visible").and("have.length", 10);

      cy.get('[data-testid="number-show"]').should("be.visible").select("20");

      cy.get("tbody > tr").should("be.visible").and("have.length", 20);
    });
  });

  describe("When the user wants to see other pages", () => {
    it("Then the user should see a button to change the page", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");

      cy.get('[data-testid="pagination__buttons"]').should("be.visible");
    });

    it("Then the user should be able to type a first name and see the result", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/current-employees");
      cy.get('[data-testid="pagination__buttons"] > button')
        .should("be.visible")
        .and("have.length", 4);
      cy.get("tbody > tr> td").should("have.html", "Adrian");

      cy.get("span>strong").should("have.html", "1 of 6");

      cy.get('[data-testid="next"]').should("be.visible").click();

      cy.get("tbody > tr")
        .should("be.visible")
        .should("not.have.html", "Adrian");
      cy.get("span>strong").should("have.html", "2 of 6");
    });
  });
});
