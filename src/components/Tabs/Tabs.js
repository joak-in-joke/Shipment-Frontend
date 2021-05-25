import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

export const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#23E5E8",
    "& > span": {
      maxWidth: 40,
      width: "100%",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
export const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
