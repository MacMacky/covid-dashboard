import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid, Paper, GridContentAlignment } from '@material-ui/core'

const paperContainerStyles = (height: string | number = 'auto') => makeStyles({
  root: {
    margin: 10,
    width: 'auto',
    height,
    padding: 25
  }
})

const PaperContainer = ({ height = 'auto', children, justify = 'flex-start' }: { height?: number | string, children: React.ReactNode, justify?: GridContentAlignment | any }) => {
  const styles = paperContainerStyles(height)()
  return (
    <Grid container component={Paper}
      elevation={4}
      justify={justify}
      className={styles.root}
      children={children}
    />
  )
}

export {
  PaperContainer
}