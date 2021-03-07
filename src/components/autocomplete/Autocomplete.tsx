import React, { ChangeEvent } from 'react'
import './Autocomplete.css'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/lab/Autocomplete'

interface AutocompleteFieldProps {
  options: any[]
  textChange: (s: string) => void
  onSelectIssue: (
    event: ChangeEvent<{}>,
    value: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any>
  ) => void
  backgroundColor: string
}

const AutocompleteField = (props: AutocompleteFieldProps) => {
  const { options, textChange, onSelectIssue, backgroundColor } = props
  const getOptionLabel = (option: any): string => option.title
  const textChanged = (args: any) => {
    const value: string = args.target.value
    textChange(value)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {options !== undefined ? (
          <Autocomplete
            options={options}
            style={{ backgroundColor }}
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
