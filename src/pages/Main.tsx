import React, { useState, useEffect } from 'react';
import LabelWithIcon from '../components/LabelWithIcon';
import { RowData } from '../helpers/types';
import { MAIN_API } from '../helpers/config';
import { PaperContainer } from '../containers/PaperContainer';
import { Grid, colors, Typography } from '@material-ui/core'
import { useFetch, useChangeDocumentTitle, useToastCallback } from '../helpers/hooks';
import { GroupAdd, PersonAddDisabled, PeopleAlt, Report, Healing, Language } from '@material-ui/icons'

function Main() {
  const [error, loading, response] = useFetch<RowData>(MAIN_API, (response) => {
    const [countries] = response || [[{}]]
    return countries[0]
  }, {})

  const [dateAndTime, setDateAndTime] = useState<string>(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateAndTime(new Date().toLocaleString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useChangeDocumentTitle()
  useToastCallback(error)


  return (
    <PaperContainer height={875}>
      <Grid container justify="center" style={{ marginBottom: 30 }}>
        <Grid container justify="center">
          <Grid item>
            <Language style={{ fontSize: 60, color: colors.brown[500] }} />
          </Grid>
          <Grid item>
            <Typography variant="h2" style={{ marginLeft: 10 }}>
              Globe
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h3" children={dateAndTime} align="center" gutterBottom />
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" >
        <LabelWithIcon label="Total Recovered" loading={loading} value={response.recovered} color={colors.green[500]} Icon={Healing} />
        <LabelWithIcon label="Total Cases" loading={loading} value={response.cases} color={colors.yellow[700]} Icon={PeopleAlt} />
        <LabelWithIcon label="Total Deaths" loading={loading} value={response.deaths} color={colors.red[400]} Icon={PersonAddDisabled} />
      </Grid>
      <Grid container justify="center" >
        <LabelWithIcon label="Active Cases" loading={loading} value={response.active} color={colors.orange[500]} Icon={GroupAdd} />
        <LabelWithIcon label="Critical" loading={loading} value={response.critical} color={colors.red[500]} Icon={Report} />
      </Grid>
      <Grid container justify="center" >
        <LabelWithIcon label="Today's Cases" loading={loading} value={response.todayCases} color={colors.orange[500]} Icon={GroupAdd} />
        <LabelWithIcon label="Today's Deaths" loading={loading} value={response.deaths} color={colors.red[500]} Icon={Report} />
      </Grid>
    </PaperContainer>
  );
}


export default Main;
