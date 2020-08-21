import React from 'react'
import { PaperContainer } from '../containers/PaperContainer'
import { useChangeDocumentTitle } from '../helpers/hooks'
import { List, ListItem, ListItemText, Paper, makeStyles, Typography, Grid } from '@material-ui/core'



const listStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 450,
    width: '100%'
  },
  header: {
    display: 'inline-block',
  }
}))


const About = ({ }) => {
  const styles = listStyles()

  useChangeDocumentTitle()
  return (
    <PaperContainer>
      <Grid container>
        <Typography variant="h4" children="List of Covid-19 Symptoms" className={styles.header} gutterBottom />
      </Grid>
      <List component="nav" aria-label="Coronavirus symptons" className={styles.root}>
        {['Fever', 'Cough', 'Shortness of breath or difficulty breathing', 'Fatigue'
          , 'Headache', 'Diarrhea', 'Sore throat', 'New loss of taste or smell', 'Runny Nose'].map(t =>
            <ListItem button component={Paper} key={t}>
              <ListItemText>
                {t}
              </ListItemText>
            </ListItem>)}
      </List>
    </PaperContainer>
  )
}


export default About