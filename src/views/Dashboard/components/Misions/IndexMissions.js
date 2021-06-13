import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "variables/api.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Dialog from "components/newMisionDialog/newMisionModal";
import TableMision from "components/Table/TableMision";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

const IndexMissions = () => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [missions, setMissions] = useState([]);
  const [mision, setMision] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMissions();
  }, []);

  const getMissions = () => {
    API.get(`mision`).then(({ data }) => {
      setMissions(data);
      setIsLoading(false);
    });
  };

  const deleteMission = (id) => {
    API.post(`mision/delete`, {
      id: id,
    }).then(() => {
      getMissions();
    });
  };

  const createMision = () => {
    API.post(`mision/add`, {
      contenido: mision,
    }).then(() => {
      getMissions();
      setOpen(false);
    });
  };

  const handleChange = (event) => {
    setMision(event.target.value);
  };

  const handleModal = () => {
    setOpen(!open);
  };

  const toParse = (misiones) => {
    let updated = [];
    misiones.map(({ id, contenido }) => updated.push([id, contenido]));
    return updated;
  };

  return (
    <>
      <Card>
        <CardHeader color="bussiness2">
          <div className={classes.informationSecc}>
            <h4 className={classes.cardTitleWhite}>Misiones</h4>
            <p className={classes.cardCategoryWhite}>
              Agenda nuevas misiones o tareas al equipo.
            </p>
          </div>
          <Button
            className={classes.addButton}
            color="bussiness"
            onClick={handleModal}
          >
            Añadir
          </Button>
        </CardHeader>
        <CardBody>
          {!isLoading && (
            <TableMision
              tableHeaderColor="bussiness"
              tableHead={["ID", "Mision"]}
              tableData={toParse(missions)}
              deleteMission={deleteMission}
            />
          )}
        </CardBody>
      </Card>

      <Dialog
        open={open}
        handleClose={handleModal}
        createMision={createMision}
        handleChange={handleChange}
        state={mision}
        setState={setMision}
      />
    </>
  );
};

export default IndexMissions;
