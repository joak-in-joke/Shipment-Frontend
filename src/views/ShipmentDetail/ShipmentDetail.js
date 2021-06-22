import React from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import { StyledTab, StyledTabs, TabPanel } from "components/Tabs/Tabs.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TimelineView from "components/TimelineView/TimelineView.js";
import ShipmentDetails from "components/ShipmentDetails/ShipmentDetails.js";
// import FilesView from "components/FilesView/FilesView.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  Button: {
    backgroundColor: "#2361E8",
    color: "#FFFFFF",
  },
  avatarImage: {
    position: "absolute",
    right: "5%",
    top: "0%",
  },
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(styles);

export default function ShipmentDetail() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const params = new URLSearchParams(useLocation().search);
  const id = params.get("id");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBack = () => {
    history.push("/admin/table");
  };

  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="bussiness">
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="Shipment Tabs"
              >
                <StyledTab label="Datos" {...a11yProps(0)} />
                {/* <StyledTab label="Archivos" {...a11yProps(1)} /> */}
                <StyledTab label="Linea de tiempo" {...a11yProps(1)} />
              </StyledTabs>
            </CardHeader>
            <CardBody>
              <TabPanel value={value} index={0}>
                <ShipmentDetails id={id} />
              </TabPanel>
              {/* <TabPanel value={value} index={1}>
                <FilesView id={id} />
              </TabPanel> */}
              <TabPanel value={value} index={1}>
                <TimelineView id={id} />
              </TabPanel>
            </CardBody>
            <CardFooter>
              <Button
                className={classes.Button}
                color="bussiness"
                onClick={() => handleBack()}
              >
                Volver
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
