import "./App.css";
import { Typography, Grid } from "@material-ui/core";
function App() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography>Hello Grid</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
