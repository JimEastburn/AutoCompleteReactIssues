import React from 'react'

import Autocomplete from './Autocomplete'

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
}

export const Default = () => {
  return (
    <Autocomplete
      backgroundColor="#ffffff"
      options={[
        {
          url: 'https://api.github.com/repos/facebook/react/issues/20222',
          repository_url: 'https://api.github.com/repos/facebook/react',
          number: 20222,
          title: 'Option 1',
          user: {
            id: 18693190,
          },
          labels: [],
        },
        {
          url: 'https://api.github.com/repos/facebook/react/issues/20222',
          repository_url: 'https://api.github.com/repos/facebook/react',
          number: 20222,
          title: 'Option 2',
          user: {
            id: 18693190,
          },
          labels: [],
        },
        {
          url: 'https://api.github.com/repos/facebook/react/issues/20222',
          repository_url: 'https://api.github.com/repos/facebook/react',
          number: 20222,
          title: 'Option 3',
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
}
