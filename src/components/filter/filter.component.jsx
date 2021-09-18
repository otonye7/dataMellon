import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { FilterContainer } from './filter.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects({handleChange, filter}) {
  
  const classes = useStyles();
  

  return (
    <FilterContainer>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-helper">Filter by City</InputLabel>
        <NativeSelect
          value={filter}
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          <option value={"Harrisonburg"}>Harrisonburg</option>
          <option value={"Columbia"}>Columbia</option>
          <option value={"Draper"}>Draper</option>
          <option value={"Dallas"}>Dallas</option>
          <option value={"Burlington"}>Burlington</option>
          <option value={"Houston"}>Houston</option>
          <option value={"Jefferson City"}>Jefferson City</option>
          <option value={"Mesa"}>Mesa</option>
          <option value={"Memphis"}>Memphis</option>
          <option value={"Seattle"}>Seattle</option>
          <option value={"Hollywood"}>Hollywood</option>
          <option value={"Los Angeles"}>Los Angeles</option>
          <option value={"Denver"}>Denver</option>
          <option value={"Louisville"}>Louisville</option>
          <option value={"San Diego"}>San Diego</option>
          <option value={"Great Falls"}>Great Falls</option>
          <option value={"San Francisco"}>San Francisco</option>
          <option value={"West Jordan"}>West Jordan</option>
          <option value={"Troy"}>Troy</option>
          <option value={"Auburn"}>Auburn</option>
          <option value={"Columbus"}>Columbus</option>
          <option value={"Evanston"}>Evanston</option>
          <option value={"Houston"}>Houston</option>
          <option value={"Phoenix"}>Phoenix</option>
          <option value={"Toledo"}>Toledo</option>
          <option value={"Tigard"}>Tigard</option>
        </NativeSelect>
        <FormHelperText>Filter by City</FormHelperText>
      </FormControl>
    </FilterContainer>
  );
}


