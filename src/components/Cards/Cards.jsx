import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return "Loading....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              className={styles.headingInfected}
              variant="h6"
              color="inherit"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography className={styles.headingInfected}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography className={styles.headingRecovered} gutterBottom>
              Recoveries
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography className={styles.headingRecovered}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography className={styles.headingDeaths} gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                seperator=","
              />
            </Typography>
            <Typography className={styles.headingDeaths}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
