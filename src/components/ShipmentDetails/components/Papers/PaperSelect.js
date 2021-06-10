import React, { useState } from "react";
import { Paper, Typography, Select, MenuItem } from "@material-ui/core";
import useStyles from "../../styles";

const Item = ({
  title,
  item,
  content,
  handleShipmentData,
  enable = true,
  nested = null,
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
      ) : (
        <Typography component="span" align="center">
          {content}
        </Typography>
      )}
    </Paper>
  );
};
export default Item;
