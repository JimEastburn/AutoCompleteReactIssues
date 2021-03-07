import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { issue } from '../../testing-helpers/issue'
import IssueView from './IssueView'

export default {
  title: 'Components/IssueView',
  component: IssueView,
} as Meta

const Template: Story = (args): any => <IssueView {...args} />

export const View = Template.bind({})
View.args = {
  selectedIssue: issue,
}
