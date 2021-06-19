import React from "react";
import API from "variables/api.js";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import {
  HighlightOff,
  KeyboardArrowRight,
  PriorityHigh,
  DoneAll,
} from "@material-ui/icons";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "../styles";

export default function TimelineCustom({ timelineData, fetchTimeline }) {
  const classes = useStyles();
  const { etd, estado, timeline } = timelineData;

  const deleteComentary = (id) => {
    API.post(`timeline/delete`, {
      id: id,
    })
      .then(({ data: { resultado } }) => {
        if (resultado) fetchTimeline();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {etd}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <KeyboardArrowRight />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Inicio
            </Typography>
            <Typography>Se creó el embarque</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      {timeline.map((comentary = {}) => (
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {comentary.creado}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <PriorityHigh />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <div className={classes.titleArea}>
                <Typography variant="h6" component="h1">
                  {comentary.titulo}
                </Typography>
                <HighlightOff
                  className={classes.icon}
                  color="error"
                  onClick={() => deleteComentary(comentary.id)}
                />
              </div>
              <Typography>{comentary.contenido}</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}

      {estado === "Finalizado" && (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <DoneAll />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Finalizó
              </Typography>
              <Typography>El embarque cerró</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      )}
    </Timeline>
  );
}
