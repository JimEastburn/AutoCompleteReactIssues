describe("AutoComplete component", () => {
  it("can find first autoComplete item when typing in the text field", function () {
    cy.visit("http://localhost:3000");
    cy.getDataTestid("autoCompleteTextField").type("i");
    cy.get("li")
      .first()
      .contains("Refactor: Can I use mountReducer to refactor mountState?");
  });
});
