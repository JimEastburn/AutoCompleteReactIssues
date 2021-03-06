import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import App from './App'

export default {
  title: 'Pages/App',
  component: App,
} as Meta

const Template: Story = (args) => <App {...args} />

export const MainStory = Template.bind({})
MainStory.args = {
  /* 👇 The args you need here will depend on your component */
}
