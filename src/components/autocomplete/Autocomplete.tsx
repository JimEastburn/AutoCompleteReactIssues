import React from 'react'
import './Autocomplete.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

const AutocompleteField = (args: any) => {
  const { options } = args
  const { textChange } = args
  const { onSelectIssue } = args
  const { backgroundColor } = args
  const { width } = args
  const getOptionLabel = (option: any): string => option.title
  const textChanged = (args: any) => {
    textChange(args.target.value)
  }

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
                  textChanged(args)
                }}
              />
            )}
          />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  )
}

export default AutocompleteField
