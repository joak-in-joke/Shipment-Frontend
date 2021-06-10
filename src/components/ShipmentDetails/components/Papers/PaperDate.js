import React, { useState } from "react";
import { Paper, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "../../styles";

const Item = ({
  title,
  item,
  content,
  handleShipmentData,
  enable = true,
  nested = null,
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            clearable
            value={content}
            format="yyyy/MM/dd"
            onChange={(e) => handleShipmentData(item, e, nested)}
          />
        </MuiPickersUtilsProvider>
      ) : (
        <Typography component="span" align="center">
          {content}
        </Typography>
      )}
    </Paper>
  );
};
export default Item;
