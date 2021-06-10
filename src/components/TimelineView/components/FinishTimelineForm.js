import React from "react";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Paper from "@material-ui/core/Paper";
import useStyles from "../styles.js";

const FinishTimelineForm = ({
  setFinishValue,
  finishValue,
  isActive,
  handleDialog,
}) => {
  const classes = useStyles();

  const handleChange = (e) => {
    setFinishValue({
      ...finishValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Paper elevation={3} variant="outlined" className={classes.finishArea}>
        <CustomInput
          labelText="Elige fecha finalización"
          id="dateFinish"
          name="date"
          type="date"
          onChange={(e) => handleChange(e)}
          value={finishValue.date}
          inputProps={{
            type: "date",
            defaultValue: "2017-05-24",
          }}
          formControlProps={{
            fullWidth: true,
          }}
        />
        <Button
          className={classes.finishButton}
          startIcon={<DoneAllIcon />}
          color="secondary"
          disabled={isActive ? false : true}
          onClick={() => handleDialog()}
        >
          Finalizar embarque
        </Button>
      </Paper>
    </>
  );
};

export default FinishTimelineForm;
