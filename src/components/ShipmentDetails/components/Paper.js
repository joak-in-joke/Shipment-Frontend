import React, { useState } from "react";
import {
  Paper,
  Typography,
  ClickAwayListener,
  TextField,
} from "@material-ui/core";
import useStyles from "../styles";

const Item = ({
  title,
  item,
  content,
  handleShipmentData,
  enable = true,
  number = false,
  nested = null,
}) => {
  const classes = useStyles();
  const [isEditting, setIsEditting] = useState(false);

  const handleOnEditting = () => {
    if (enable) setIsEditting(true);
  };

  const handleOffEditting = () => {
    setIsEditting(false);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) handleOffEditting();
  };

  return (
    <ClickAwayListener onClickAway={handleOffEditting}>
      <Paper
        className={classes.Paper}
        variant="outlined"
        onClick={handleOnEditting}
      >
        <Typography className={classes.Title}>{title}:</Typography>
        {isEditting ? (
          <TextField
            id={item}
            value={content}
            onChange={(e) => handleShipmentData(item, e.target.value, nested)}
            onKeyDown={keyPress}
            type={number ? "number" : "text"}
          />
        ) : (
          <Typography component="span" align="center">
            {content}
          </Typography>
        )}
      </Paper>
    </ClickAwayListener>
  );
};
export default Item;
