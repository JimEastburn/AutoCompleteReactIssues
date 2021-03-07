describe('AutoComplete component', () => {
  it('should show first autoComplete item on screen after clicking it', function () {
    cy.visit('http://localhost:3000')
    cy.getDataTestid('autoCompleteTextField').type('i')
    const liFirst = cy.get('li').first()
    liFirst.contains('Refactor: Can I use mountReducer to refactor mountState?')
    liFirst.click()
    cy.contains('#20222')
    cy.contains(
      'I noticed that `updateState` uses `updateReducer` internally like this:'
    )
  })
})
