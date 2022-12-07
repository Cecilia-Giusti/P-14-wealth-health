describe('Given the user is on the home page"', () => {
  describe("When the user wants to add a new employee", () => {
    it("Then the user should be see a empty form", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/");
      cy.get("form").should("be.visible");

      cy.get('[id="firstName"').should("have.value", "");
      cy.get('[id="lastName"').should("have.value", "");
      cy.get('[id="departements"').should("have.value", "");
      cy.get('[id="street"').should("have.value", "");
      cy.get('[id="city"').should("have.value", "");
      cy.get('[id="states"').should("have.value", "");
      cy.get('[id="zipCode"').should("have.value", "");
    });

    it("Then the users should be see a form", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/");
    });
  });

  describe("When the user completes all fields correctly", () => {
    it("Then the user should see a confirmation modal", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/");

      cy.get('[id="firstName"]').type("John");
      cy.get('[id="lastName"]').type("Smith");
      cy.get('[id="birthday"]').clear().type("04/05/1989");
      cy.get("form").click();
      cy.get('[id="departements"]').select("Engineering");
      cy.get('[id="street"]').type("38 ch des allouettes");
      cy.get('[id="city"]').type("LA");
      cy.get('[id="states"]').select("California");
      cy.get('[id="zipCode"]').type("986638");

      cy.get("input[type=submit]").should("be.visible");
      cy.get("input[type=submit]").click();
      cy.get('[id="confirmationModale"]').should("be.visible");

      cy.get('[id="confirmationModale"]').click();
    });
  });

  describe("When the user completes all fields corrects and one field incorrect", () => {
    it("Then the user should see a error message", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health/");

      cy.get('[id="firstName"]').type("John");
      cy.get('[id="lastName"]').type("Smith");
      cy.get('[id="departements"]').select("Engineering");
      cy.get('[id="street"]').type("38 ch des allouettes");
      cy.get('[id="city"]').type("LA");
      cy.get('[id="states"]').select("California");
      cy.get('[id="zipCode"]').type("986638");

      cy.get("input[type=submit]").should("be.visible");
      cy.get("input[type=submit]").click();

      cy.get('[id="errorMessage"]').should("be.visible");
      cy.get('[id="birthday"]').should(
        "have.attr",
        "style",
        "border-bottom: 1px solid red"
      );
    });
  });
});
