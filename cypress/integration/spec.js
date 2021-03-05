describe("CRA", () => {
  it("can find first autoComplete item", function () {
    cy.visit("http://localhost:3001");
    cy.getDataAutomation("autoCompleteTextField").type("i");
    cy.get("li")
      .first()
      .contains("Refactor: Can I use mountReducer to refactor mountState?");
  });
});
