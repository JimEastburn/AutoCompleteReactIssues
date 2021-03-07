import React, { useEffect } from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import AutocompleteField from './components/autocomplete/Autocomplete'
import { GITHUB_TOKEN } from './config/config'
import axios from 'axios'
import IssueView from './components/IssueView/IssueView'

function App() {
  const [issues, setIssues] = React.useState([])
  const [selectedIssue, setSelectedIssue] = React.useState(null)
  const [searchText, setSearchText] = React.useState('')

  useEffect(() => {
    const header = {
      Authorization: `token ${GITHUB_TOKEN}`,
    }
    if (searchText) {
      var q = `https://api.github.com/search/issues?accept=application/vnd.github.v3+json&per_page=30&page=1&q=repo:facebook/react+${searchText} in:title`
      axios
        .get(q, { headers: header })
        .then((response: any) => {
          if (response && response.data) {
            setIssues(response.data.items)
          } else {
            setIssues([])
          }
        })
        .catch((error: any) => {
          console.log('ERROR', error)
        })
    }
  }, [searchText])
  const getSearchResults = (s: string) => {
    setSearchText(s)
  }
  const onSelectIssue = (event: any, issue: any) => {
    if (issue) {
      setSelectedIssue(issue)
    }
  }
  return (
    <Grid container spacing={1} className="root-container">
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item className="autocomplete-cnt">
            <AutocompleteField
              backgroundColor="#ffffff"
              options={issues}
              onSelectIssue={onSelectIssue}
              textChange={getSearchResults}
            ></AutocompleteField>
            <IssueView selectedIssue={selectedIssue}></IssueView>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
