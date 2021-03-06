import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Autocomplete from './Autocomplete'

test('renders autocomplete', () => {
  const { getByRole } = render(
    <Autocomplete
      backgroundColor="#ffffff"
      options={[
        {
          url: 'https://api.github.com/repos/facebook/react/issues/20222',
          repository_url: 'https://api.github.com/repos/facebook/react',
          number: 20222,
          title: 'Refactor: Can I use mountReducer to refactor mountState?',
          user: {
            id: 18693190,
          },
          labels: [],
        },
      ]}
      onSelectIssue={() => {}}
      textChange={() => {}}
    />
  )
  const autocomplete = getByRole('textbox')

  autocomplete.focus()

  fireEvent.change(autocomplete, { target: { value: 'i' } })

  const optionIsFound = getByRole('option', {
    name: 'Refactor: Can I use mountReducer to refactor mountState?',
  })

  expect(optionIsFound).toBeTruthy()
})
