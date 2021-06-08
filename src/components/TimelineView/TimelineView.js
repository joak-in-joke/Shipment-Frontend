import React, { useEffect, useState, useContext, useCallback } from "react";
import { AuthContext } from "context/AuthProvider";
import API from "variables/api.js";
import { Grid } from "@material-ui/core";
import { formatDateX } from "variables/functions";
import TimelineCustom from "./components/Timeline.js";
import useStyles from "./styles.js";
import AddComentaryForm from "./components/AddComentaryForm";
import FinishTimelineForm from "./components/FinishTimelineForm.js";

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
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  const fetchTimeline = useCallback(() => {
    API.get(`timeline/${id}`, {})
      .then(({ data: { resultado, data } }) => {
        if (resultado) setTimelineData(data);
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
      .then(({ data: { resultado } }) => {
        if (resultado) fetchTimeline();
      })
      .catch((error) => {
        console.log(error);
      });
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
        />
        <FinishTimelineForm
          finishTimeline={finishTimeline}
          setFinishValue={setFinishValue}
          finishValue={finishValue}
          status={timelineData.estado}
        />
      </Grid>
    </Grid>
  );
}
