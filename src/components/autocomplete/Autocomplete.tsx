import React from "react";
import "./Autocomplete.css";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const AutocompleteField = (args: any) => {
  const options = args.options;
  const textChange = args.textChange;
  const onSelectIssue = args.onSelectIssue;
  var backgroundColor = args.backgroundColor;
  var width = args.width;
  const getOptionLabel = (option: any): string => {
    return option.title;
  };
  const textChanged = (args: any) => {
    textChange(args.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {options !== undefined ? (
          <Autocomplete
            options={options}
            style={{ backgroundColor, width }}
            getOptionLabel={getOptionLabel}
            onChange={onSelectIssue}
            renderInput={(params) => (
              <TextField
                {...params}
                data-testid="autoCompleteTextField"
                variant="outlined"
                className="text-feild"
                placeholder="Search issues"
                onKeyUp={(args) => {
                  textChanged(args);
                }}
              />
            )}
          />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
};

export default AutocompleteField;
