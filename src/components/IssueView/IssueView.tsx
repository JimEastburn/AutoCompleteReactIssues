import React from 'react'
import './IssueView.css'
import Grid from '@material-ui/core/Grid'

const IssueView = (args: any) => {
  const issue = args.selectedIssue

  return (
    <Grid container className="main-cnt">
      {issue ? (
        <Grid container className="content-cnt">
          <Grid container>
            <a className="title" href={issue.html_url}>
              {issue.title}
            </a>
            <span className="issue-number">{' #' + issue.number}</span>
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
                src={issue.user.avatar_url}
              ></img>
            </Grid>
            <Grid item className="user-name">
              <a rel="noreferrer" href={issue.user.html_url} target="_blank">
                {' '}
                {issue.user.login}
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
          <Grid className="issue-body">
            <p>{issue.body}</p>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}

export default IssueView
