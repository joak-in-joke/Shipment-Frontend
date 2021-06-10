import React, { useState } from "react";
import { Paper, Typography, TextField } from "@material-ui/core";
import useStyles from "../../styles";

const Item = ({
  title,
  item,
  content,
  handleShipmentData,
  enable = true,
  number = false,
  readOnly = false,
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
      {isEditting && !readOnly ? (
        <TextField
          id={item}
          value={content}
          onChange={(e) => handleShipmentData(item, e.target.value, nested)}
          type={number ? "number" : "text"}
        />
      ) : (
        <Typography component="span" align="center">
          {content}
          {readOnly && " $USD"}
        </Typography>
      )}
    </Paper>
  );
};
export default Item;
