import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "context/AuthProvider";
import API from "variables/api.js";
import { Grid } from "@material-ui/core";
import { formatDateX } from "variables/functions";
import TimelineCustom from "./components/Timeline.js";
import useStyles from "./styles.js";
import AddComentaryForm from "./components/AddComentaryForm";
import FinishTimelineForm from "./components/FinishTimelineForm.js";
import ConfirmDialog from "./components/ConfirmDialog.js";

export default function TimelineView({ id }) {
  const {
    userData: { id: idData },
  } = useContext(AuthContext);
  const [timelineData, setTimelineData] = useState(null);
  const [newComentaryValues, setNewComentaryValues] = useState({
    title: "",
    date: "2017-05-24",
    icon: 1,
    content: "",
  });
  const [finishValue, setFinishValue] = useState({
    date: "2017-05-24",
  });
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmDialog, setConfirmDialog] = useState(false);
  const classes = useStyles();

  const fetchTimeline = useCallback(() => {
    API.get(`timeline/${id}`, {})
      .then(({ data: { resultado, data } }) => {
        if (resultado) {
          setTimelineData(data);
          if (data.estado === "Activo") setIsActive(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    fetchTimeline();
  }, [id, fetchTimeline]);

  const addComentary = () => {
    API.post(`timeline/add`, {
      id: id,
      id_usuario: idData,
      contenido: newComentaryValues.content,
      titulo: newComentaryValues.title,
      fecha: formatDateX(newComentaryValues.date),
    })
      .then(({ data: { resultado } }) => {
        fetchTimeline();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const finishTimeline = () => {
    API.post(`timeline/finish`, {
      id: id,
      fecha: finishValue.date,
    })
      .then(({ data: { resultado, TimelineUpdate, embarqueData } }) => {
        if (resultado) {
          console.log(resultado, TimelineUpdate, embarqueData);
          fetchTimeline();
          handleDialog();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDialog = () => {
    setConfirmDialog(!confirmDialog);
  };

  if (isLoading) return null;
  return (
    <Grid container>
      <Grid item xs={8}>
        <TimelineCustom
          timelineData={timelineData}
          fetchTimeline={fetchTimeline}
        />
      </Grid>
      <Grid item xs={4} className={classes.optionsArea}>
        <AddComentaryForm
          addComentary={addComentary}
          newComentaryValues={newComentaryValues}
          setNewComentaryValues={setNewComentaryValues}
          isActive={isActive}
        />
        <FinishTimelineForm
          finishTimeline={finishTimeline}
          setFinishValue={setFinishValue}
          handleDialog={handleDialog}
          finishValue={finishValue}
          isActive={isActive}
        />
      </Grid>

      <ConfirmDialog
        open={confirmDialog}
        handleClose={handleDialog}
        onSubmit={() => finishTimeline()}
      />
    </Grid>
  );
}
