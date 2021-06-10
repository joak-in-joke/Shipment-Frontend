import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "../../styles";

const Item = ({
  title,
  item,
  content,
  handleShipmentData,
  enable = true,
  number = false,
  nested = null,
  isSelect = false,
  isDate = false,
  selectOptions = [],
}) => {
  const classes = useStyles();
  const [isEditting, setIsEditting] = useState(false);

  const handleOnEditting = () => {
    if (enable) setIsEditting(true);
  };

  return (
    <Paper
      className={classes.Paper}
      variant="outlined"
      onClick={handleOnEditting}
    >
      <Typography className={classes.Title}>{title}:</Typography>
      {isEditting ? (
        isSelect ? (
          <Select
            id={item}
            value={content}
            onChange={(e) => handleShipmentData(item, e.target.value, nested)}
          >
            {selectOptions.map(({ value, label }) => (
              <MenuItem value={value} key={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        ) : isDate ? (
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              clearable
              value={content}
              format="yyyy/MM/dd"
              onChange={(e) => handleShipmentData(item, e, nested)}
            />
          </MuiPickersUtilsProvider>
        ) : (
          <TextField
            id={item}
            value={content}
            onChange={(e) => handleShipmentData(item, e.target.value, nested)}
            type={number ? "number" : "text"}
          />
        )
      ) : (
        <Typography component="span" align="center">
          {content}
        </Typography>
      )}
    </Paper>
  );
};
export default Item;
