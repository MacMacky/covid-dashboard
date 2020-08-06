import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper } from '@material-ui/core'

const paperContainerStyles = makeStyles({
  root: {
    margin: 30,
    width: 'auto',
    height: 'auto',
    padding: 25
  }
})

const PaperContainer = ({ children }: { children: React.ReactNode }) => {
  const styles = paperContainerStyles()
  return (
    <Grid container component={Paper}
      elevation={4}
      className={styles.root}
      children={children}
    />
  )
}

export {
  PaperContainer
}