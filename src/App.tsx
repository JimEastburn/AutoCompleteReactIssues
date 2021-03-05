import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import AutocompleteField from "./components/autocomplete/Autocomplete";
const axios = require("axios");
function App() {
  const [issues, setIssues] = React.useState([]);

  const getSearchResults = (s: string) => {
    var q = `https://api.github.com/search/issues?accept=application/vnd.github.v3+json&per_page=30&page=1&q=type:issue+is:open+repo:facebook/react+${s} in:title`;
    axios
      .get(q)
      .then((response: any) => {
        // handle success
        if (response && response.data) {
          setIssues(response.data.items);
        } else {
          setIssues([]);
        }
      })
      .catch((error: any) => {
        // handle error
        console.log("ERROR", error);
      });
  };
  const onSelectIssue = (event: any, issue: any) => {
    if (issue) {
      window.open(issue.html_url, "_blank");
    }
  };
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
