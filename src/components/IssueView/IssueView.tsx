/* eslint-disable  react/no-children-prop */
import React from 'react'
import './IssueView.css'
import Grid from '@material-ui/core/Grid'
import Markdown from 'markdown-to-jsx'
import { components } from '../../../node_modules/@octokit/openapi-types/dist-types/'
import { Card, CardContent, Typography } from '@material-ui/core'

type IssueSearchAPIResponse = components['schemas']['issue-search-result-item']

const IssueView = (args: any) => {
  const issue: IssueSearchAPIResponse = args.selectedIssue

  return (
    <Grid container className="main-cnt">
      {issue ? (
        <Grid container className="content-cnt">
          <Grid container>
            <a
              className="title"
              href={issue.html_url}
              data-testid="issueViewTitle"
            >
              {issue.title}
            </a>
            <span className="issue-number" data-testid="issueViewNumber">
              {' #' + issue.number}{' '}
            </span>
          </Grid>
          <Grid container spacing={2} className="status-container">
            <Grid
              item
              style={{
                backgroundColor: issue.state === 'open' ? '#28A745' : '#D73A49',
              }}
              className="issue-status"
            >
              {issue.state}
            </Grid>
            <Grid item>
              <img
                alt="user"
                className="user-image"
                src={issue.user?.avatar_url}
              ></img>
            </Grid>
            <Grid item className="user-name">
              <a rel="noreferrer" href={issue.user?.html_url} target="_blank">
                {' '}
                {issue.user?.login}
              </a>
            </Grid>
            <Grid item className="create">
              {'opened this issue on ' +
                new Date(issue.created_at).toDateString()}
            </Grid>
            <Grid item className="create">
              <a rel="noreferrer" href={issue.comments_url} target="_blank">
                {' '}
                {issue.comments + ' comments'}
              </a>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="status-container">
            <Grid item className="user-name">
              Labels
            </Grid>
            {issue.labels.map((a: any, i: number) => (
              <Grid
                item
                key={i}
                style={{
                  backgroundColor: '#' + a.color,
                }}
                className="issue-status"
              >
                {a.name}
              </Grid>
            ))}
            {issue.labels.length === 0 ? (
              <Grid className="create">No Labels</Grid>
            ) : (
              <></>
            )}
          </Grid>
          <Grid className="issue-body status-container">
            <Card variant="outlined">
              <CardContent>
                <Markdown children={issue.body as string} />

                <Typography variant="body2" component="p"></Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}

export default IssueView
