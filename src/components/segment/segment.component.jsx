import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { FilterContainer } from './segment.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({handleSegmentChange, filterSegment}) {
  
  const classes = useStyles();
  

  return (
    <FilterContainer>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Filter by Segments</InputLabel>
        <NativeSelect
          value={filterSegment}
          onChange={handleSegmentChange}
        >
          <option aria-label="None" value="" />
          <option value={"Corporate"}>Corporate</option>
          <option value={"Consumer"}>Consumer</option>
        </NativeSelect>
        <FormHelperText>Filter by Segments</FormHelperText>
      </FormControl>
    </FilterContainer>
  );
}