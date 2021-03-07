import React from 'react'
import { render } from '@testing-library/react'
import { issue } from '../../testing-helpers/issue'
import IssueView from './IssueView'

const args = {
  selectedIssue: issue,
}

test('renders autocomplete', () => {
  const { getByRole } = render(<IssueView {...args} />)

  const userImgIsFound = getByRole('img', {
    name: 'user',
  })
  const linkTitleIsFound = getByRole('link', {
    name:
      'Feat: Some type of way to merge key prop and useOpaqueIdentifier result',
  })
  const linkCommentsIsFound = getByRole('link', {
    name: '2 comments',
  })

  const linkUserIsFound = getByRole('link', {
    name: 'SoAsEr',
  })

  expect(userImgIsFound.getAttribute('src')).toEqual(
    'https://avatars.githubusercontent.com/u/20920091?v=4'
  )
  expect(linkTitleIsFound.getAttribute('href')).toEqual(
    'https://github.com/facebook/react/issues/20822'
  )
  expect(linkCommentsIsFound.getAttribute('href')).toEqual(
    'https://api.github.com/repos/facebook/react/issues/20822/comments'
  )
  expect(linkUserIsFound.getAttribute('href')).toEqual(
    'https://github.com/SoAsEr'
  )
})
