import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import AutocompleteField from './Autocomplete'

const options = [
  { title: 'Option 0' },
  { title: 'Option 1' },
  { title: 'Option 2' },
  { title: 'Option 3' },
]
export default {
  title: 'Components/AutocompleteField',
  component: AutocompleteField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args): any => <AutocompleteField {...args} />

export const Primary = Template.bind({})
Primary.args = {
  options,
  onSelectIssue: (value: any) => {},
  textChange: (text: string) => {},
}

export const Large = Template.bind({})
Large.args = {
  options,
  onSelectIssue: (value: any) => {},
  textChange: (text: string) => {},
  width: '90%',
}

export const Small = Template.bind({})
Small.args = {
  options,
  onSelectIssue: (value: any) => {},
  textChange: (text: string) => {},
  width: '50%',
}
