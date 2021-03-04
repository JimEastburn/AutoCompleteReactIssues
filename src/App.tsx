
import './App.css';
import Grid from "@material-ui/core/Grid";
import { Typography } from '@material-ui/core';
function App() {
  return (
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
   <Typography>Hello Grid</Typography>
  </Grid>   
</Grid> 
  );
}

export default App;
