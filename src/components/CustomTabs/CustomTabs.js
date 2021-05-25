import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import Select from "react-select";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "components/Dialog/Dialog.js";

import styles from "assets/jss/material-dashboard-react/components/customTabsStyle.js";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(styles);

const options = [
  { value: "misiones", label: "misiones" },
  { value: "notas", label: "notas" },
];

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  const classes = useStyles();
  const { headerColor, plainTabs, tabs, title, rtlActive } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive,
  });
  const [open, setOpen] = useState(false); // Hook con variable booleana que maneja el estado abierto-cerrado del dialog

  // Funcion para cambiar el estado de "open" en los componentes
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <Card plain={plainTabs}>
      <CardHeader color={headerColor} plain={plainTabs}>
        {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{
            root: classes.tabsRoot,
            indicator: classes.displayNone,
            scrollButtons: classes.displayNone,
          }}
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabs.map((prop, key) => {
            var icon = {};
            if (prop.tabIcon) {
              icon = {
                icon: <prop.tabIcon />,
              };
            }
            return (
              <Tab
                classes={{
                  root: classes.tabRootButton,
                  selected: classes.tabSelected,
                  wrapper: classes.tabWrapper,
                }}
                key={key}
                label={prop.tabName}
                {...icon}
              />
            );
          })}
          <Tab>as</Tab>
        </Tabs>
        <Button
          className={classes.addButton}
          color="bussiness"
          onClick={handleClose}
        >
          {/* Se le entrega a onClick la funcion handleClose para que al presionar me cambie el estado de open */}
          Añadir
        </Button>
      </CardHeader>
      <CardBody>
        {tabs.map((prop, key) => {
          if (key === value) {
            return <div key={key}>{prop.tabContent}</div>;
          }
          return null;
        })}
      </CardBody>

      <Dialog
        title="Añadir nueva mision"
        handleClose={handleClose}
        open={open}
        maxWidth={true}
        content={
          <Grid className={classes.widthDialog} spacing={2}>
            <Select
              options={options}
              className={classes.selectInput}
              placeholder="Selecciona seccion"
            />
            <TextField
              placeholder="Texto"
              variant="outlined"
              size="small"
              InputProps={{
                classes: {
                  root: classes.inputForm,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </Grid>
        }
      />
      {/* Le entrego al atributo handleClose que activa el evento de cierre mi funcion para cambiar el estado de open */}
    </Card>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired,
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool,
};
