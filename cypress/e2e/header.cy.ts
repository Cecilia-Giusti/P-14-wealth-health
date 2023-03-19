describe("Given the user is on the home page", () => {
  describe("when the user wants to navigate the application", () => {
    it("Then the user click on current employee button should be redirection on current employee page  ", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health");
      cy.get("h1").should("not.have.html", "List employees");
      cy.get("h1").should("have.html", "Create Employee");

      cy.contains("current employees").click();

      cy.contains("List employees").should("be.visible");
    });

    it("Then the user click on create employee button should be redirection on create employee page  ", () => {
      cy.visit("http://localhost:3000/P-14-wealth-health#/current-employees");
      cy.get("h1").should("have.html", "List employees");
      cy.get("h1").should("not.have.html", "Create Employee");

      cy.contains("create employee").click();

      cy.contains("Create Employee").should("be.visible");
    });
  });
});
