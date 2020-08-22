import React from 'react'
import { Skeleton } from '@material-ui/lab'
import { PaperContainer } from '../containers/PaperContainer'
import { COVID_WIKI_API } from '../helpers/config'
import { useChangeDocumentTitle, useFetch, useToastCallback } from '../helpers/hooks'
import { List, ListItem, ListItemText, Paper, makeStyles, Typography, Grid } from '@material-ui/core'



const listStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 450,
    width: '100%'
  }
}))


const About = ({ }) => {
  const styles = listStyles()
  const [error, loading, response] = useFetch(COVID_WIKI_API, ([response = {}]) => {
    const { query: { pages } } = response
    // 63030231 - id
    const { title = '', extract = '' } = pages[63030231] || {}
    return { title, extract }
  }, {})


  useToastCallback(error)
  useChangeDocumentTitle()
  return (
    <PaperContainer justify="center">
      <Grid container justify="center">
        <Grid item>
          <Typography gutterBottom variant="h2">
            {loading ? <Skeleton variant="rect" height={50} width={400} /> : response.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item lg>
          <Typography gutterBottom component="div" >
            {loading ? <Skeleton height={200} width='100%' /> : response.extract}
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item md={5}>
          <Typography
            variant="h4"
            align="center"
            children={loading ? <Skeleton /> : "List of Covid-19 Symptoms"}
            gutterBottom />
        </Grid>
      </Grid>
      <List component="nav" aria-label="Coronavirus symptons" className={styles.root}>
        {['Fever', 'Cough', 'Shortness of breath or difficulty breathing', 'Fatigue'
          , 'Headache', 'Diarrhea', 'Sore throat', 'New loss of taste or smell', 'Runny Nose'].map(t =>
            <ListItem button component={Paper} key={t}>
              <ListItemText>
                {loading ? <Skeleton /> : t}
              </ListItemText>
            </ListItem>)}
      </List>
      <Grid container justify="center">
        <Grid item md={5}>
          <Typography
            variant="h4"
            align="center"
            children={loading ? <Skeleton /> : "Work On Progress here..."}
            gutterBottom />
        </Grid>
      </Grid>
    </PaperContainer>
  )
}


export default About