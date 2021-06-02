import React, { useState, useContext } from "react";
import { AuthContext } from "context/AuthProvider";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { VpnKey } from "@material-ui/icons";
import { TextField, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/AccessStyle";

const useStyles = makeStyles(styles);

const animation = {
  shake: {
    x: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 0.6,
    },
  },
  noShake: { opacity: 1 },
};

export const AccessView = () => {
  const { SignIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    SignIn();
    setIsLoading(false);
  };

  const errorsQuest = errors.password || errors.user;

  return (
    <div className={classes.root}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.container}
        variant="outlined"
      >
        <Controller
          name="user"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.input}
              id="user"
              label="usuario"
              variant="outlined"
              error={errors.user ? true : null}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: { value: true },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.input}
              id="password"
              label="constraseña"
              variant="outlined"
              type="password"
              error={errors.password ? true : null}
            />
          )}
        />

        <Button
          variant="contained"
          className={classes.addButton}
          startIcon={<VpnKey />}
          disable={isLoading}
          color="bussiness"
          type="submit"
        >
          Acceder
        </Button>
      </form>
      {errorsQuest && (
        <motion.div
          animate={errorsQuest ? "shake" : "noShake"}
          variants={animation}
          className={classes.messageArea}
        >
          <Typography className={classes.text}>Campos requeridos</Typography>
        </motion.div>
      )}
    </div>
  );
};

export default AccessView;
